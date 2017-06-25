import _ from 'lodash';
import * as actions from '../action-types';
import {
  coordToPrettyText,
  getQuery,
  getPosterLook,
  getCenterOfCoordinates
} from '../util';
import dummyCheckoutState from '../util/dummy-checkout-state';
import history from '../history';
import {
  POSTER_STYLES,
  POSTER_SIZES,
  POSTER_ORIENTATIONS,
  MAP_STYLES,
} from 'alvarcarto-common';

const DEBUG = getQuery('debug', 'boolean', false) === 'true';
const BARCELONA_BOUNDS = {
  southWest: { lat: 41.20008064593956, lng: 1.985047735210639 },
  northEast: { lat: 41.56438133922028, lng: 2.3491965063447577 },
};

const initialMapBounds = {
  southWest: {
    lat: getQuery('swLat', 'float', BARCELONA_BOUNDS.southWest.lat),
    lng: getQuery('swLng', 'float', BARCELONA_BOUNDS.southWest.lng),
  },
  northEast: {
    lat: getQuery('neLat', 'float', BARCELONA_BOUNDS.northEast.lat),
    lng: getQuery('neLng', 'float', BARCELONA_BOUNDS.northEast.lng),
  },
};
const initialMapCenter = getCenterOfCoordinates([
  initialMapBounds.southWest,
  initialMapBounds.northEast,
]);

const initialState = {
  debug: DEBUG,
  location: history.location,
  cart: [
    {
      quantity: 1,
      mapCenter: initialMapCenter,
      mapBounds: initialMapBounds,
      mapZoom: getQuery('mapZoom', 'float', 10.5),
      mapStyle: getQuery('mapStyle', 'string', 'bw', _.map(MAP_STYLES, 'id')),
      posterStyle: getQuery('posterStyle', 'string', 'sharp', _.map(POSTER_STYLES, 'id')),
      mapPitch: 0,
      mapBearing: 0,
      orientation: getQuery('orientation', 'string', 'portrait', _.map(POSTER_ORIENTATIONS, 'id')),
      size: getQuery('size', 'string', '50x70cm', _.map(POSTER_SIZES, 'id')),
      labelsEnabled: getQuery('labelsEnabled', 'boolean', true),
      labelHeader: getQuery('labelHeader', 'string', 'Barcelona'),
      labelSmallHeader: getQuery('labelSmallHeader', 'string', 'Catalonia'),
      labelText: coordToPrettyText(initialMapCenter),
    }
  ],
  checkoutFormState: DEBUG ? dummyCheckoutState : null,
  editCartItem: 0,
  postingOrder: false,
  postOrderResponse: null,
  postOrderError: null,
  shippingAddress: {
    city: 'your city'
  },
};

const freshInitialState = _.cloneDeep(initialState);
export { freshInitialState as initialState };

function reducer(state = initialState, action) {
  let newAttrs, newState;

  switch (action.type) {
    case actions.SET_LOCATION:
      return _.extend({}, state, { location: action.payload });

    case actions.SET_MAP_VIEW:
      newAttrs = {
        mapCenter: action.payload.center,
        mapBounds: action.payload.bounds,
        mapZoom: action.payload.zoom,
        mapPitch: action.payload.pitch,
        mapBearing: action.payload.bearing,
      };

      return extendCurrentCartItem(state, _.omitBy(newAttrs, _.isNil));

    case actions.SET_MAP_LABELS:
      newAttrs = {
        labelsEnabled: action.payload.enabled,
        labelHeader: action.payload.header,
        labelSmallHeader: action.payload.smallHeader,
        labelText: action.payload.text,
      };

      return extendCurrentCartItem(state, _.omitBy(newAttrs, _.isNil));

    case actions.SET_MAP_STYLE:
      return extendCurrentCartItem(state, { mapStyle: action.payload });

    case actions.SET_POSTER_STYLE:
      let posterStyle = action.payload;
      const posterLook = getPosterLook(posterStyle);
      const currentItem = getCurrentCartItem(state);

      if (_.isArray(posterLook.allowedMapStyles) && !_.includes(posterLook.allowedMapStyles, currentItem.mapStyle)) {
        return extendCurrentCartItem(state, {
          mapStyle: posterLook.allowedMapStyles[0],
          posterStyle: action.payload,
        });
      }

      return extendCurrentCartItem(state, { posterStyle: action.payload });

    case actions.SET_POSTER_LAYOUT:
      newAttrs = {
        orientation: action.payload.orientation,
        size: action.payload.size,
      };

      return extendCurrentCartItem(state, _.omitBy(newAttrs, _.isNil));

    case actions.ADD_CART_ITEM_QUANTITY:
      const currentQuantity = state.cart[action.payload.index].quantity;
      newAttrs = {
        quantity: currentQuantity + action.payload.add,
      };

      return extendCartItem(state, action.payload.index, _.omitBy(newAttrs, _.isNil));

    case actions.EDIT_CART_ITEM:
      return _.extend({}, state, {
        editCartItem: action.payload,
      });

     case actions.ADD_CART_ITEM:
      newState = _.cloneDeep(state);
      const newEmptyItem = _.cloneDeep(freshInitialState.cart[0]);
      newState.cart.push(newEmptyItem);
      newState.editCartItem = newState.cart.length - 1;
      return newState;

    case actions.REMOVE_CART_ITEM:
      const removeIndex = action.payload;
      newState = _.cloneDeep(state);

      let newEditCartItem;
      if (removeIndex < newState.editCartItem) {
        // Removed item was "below" the currently selected
        newEditCartItem = newState.editCartItem - 1;
      } else if (removeIndex > newState.editCartItem) {
        // Removed item was "above" the currently selected
        newEditCartItem = newState.editCartItem
      } else {
        // Removed item was the currently selected so
        // default to 0
        newEditCartItem = 0;
      }

      newState.editCartItem = newEditCartItem;
      newState.cart.splice(removeIndex, 1);
      return newState;

    case actions.POST_ORDER_REQUEST:
      return _.extend({}, state, {
        shippingAddress: action.payload.shippingAddress,
        postingOrder: true,
        postOrderResponse: null,
        postOrderError: null
      });

    case actions.POST_ORDER_SUCCESS:
      return _.extend({}, state, {
        postingOrder: false,
        postOrderResponse: action.payload,
        postOrderError: null,
        // Clear checkout forms after successful purchase
        checkoutFormState: null,
      });

    case actions.POST_ORDER_FAILURE:
      return _.extend({}, state, { postingOrder: false, postOrderResponse: null, postOrderError: action.payload });

    case actions.CHECKOUT_FORM_STATE_CHANGE:
      return _.extend({}, state, { checkoutFormState: action.payload });

    default:
      return state;
  }
}

function getCurrentCartItem(state) {
  const index = state.editCartItem;
  return state.cart[index];
}

function extendCurrentCartItem(state, newAttrs) {
  const index = state.editCartItem;
  return extendCartItem(state, index, newAttrs);
}

function extendCartItem(state, index, newAttrs) {
  const oldItem = state.cart[index];
  const newItem = _.extend({}, oldItem, newAttrs);

  const newState = _.cloneDeep(state);
  newState.cart[index] = newItem;
  return newState;
}

export default reducer;