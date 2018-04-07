import _ from 'lodash';
import * as actions from '../action-types';
import {
  coordToPrettyText,
  getQuery,
  getPosterLook
} from '../util';
import dummyCheckoutState from '../util/dummy-checkout-state';
import CONST from '../constants';
import history from '../history';
import {
  POSTER_STYLES,
  POSTER_SIZES,
  POSTER_ORIENTATIONS,
  MAP_STYLES,
} from 'alvarcarto-common';

const DEBUG = getQuery('debug', 'boolean', false);
const BARCELONA_CENTER = {
  lat: 41.382374,
  lng: 2.166612,
};
export { BARCELONA_CENTER as DEFAULT_MAP_CENTER };

const initialMapCenter = {
  lat: getQuery('lat', 'float', BARCELONA_CENTER.lat),
  lng: getQuery('lng', 'float', BARCELONA_CENTER.lng),
};
let mapZoom = getQuery('zoom', 'float', 10.5);
if (mapZoom < CONST.MAP_MIN_ZOOM) {
  mapZoom = CONST.MAP_MIN_ZOOM;
} else if (mapZoom > CONST.MAP_MAX_ZOOM) {
  mapZoom = CONST.MAP_MAX_ZOOM;
}

// We can assign a unique id for each new poster in the cart. This can be used as a stable React
// key (needed for e.g. MiniCart transition)
const idCounter = 0;

function getItemId() {
  idCounter++;
  return idCounter;
}

const initialState = {
  debug: DEBUG,
  apiKey: getQuery('apiKey', 'string'),
  partnerMode: getQuery('friend', 'boolean', false),
  location: history.location,
  initialLoadTime: new Date(),
  cart: [
    {
      id: getItemId(),
      quantity: 1,
      mapCenter: initialMapCenter,
      mapBounds: null,
      mapZoom,
      mapStyle: getQuery('mapStyle', 'string', 'bw', _.map(MAP_STYLES, 'id')),
      posterStyle: getQuery('posterStyle', 'string', 'sharp', _.map(POSTER_STYLES, 'id')),
      mapPitch: 0,
      mapBearing: 0,
      orientation: getQuery('orientation', 'string', 'portrait', _.map(POSTER_ORIENTATIONS, 'id')),
      size: getQuery('size', 'string', '50x70cm', _.map(POSTER_SIZES, 'id')),
      labelsEnabled: getQuery('labels', 'boolean', true),
      labelHeader: getQuery('labelHeader', 'string', 'Barcelona'),
      labelSmallHeader: getQuery('labelSmallHeader', 'string', 'Catalonia'),
      labelText: getQuery('labelText', 'string', coordToPrettyText(initialMapCenter)),
      // Used to save user entered text only. This can be used to recover what
      // user wrote if they change autoUpdateCoordinates flag
      labelTextManual: null,
      autoUpdateCoordinates: true,
    }
  ],
  giftCardCart: [
    {
      type: 'giftCardValue',
      quantity: 1,
      value: getQuery('value', 'integer', 4900),
    },
  ],
  checkoutFormState: DEBUG ? dummyCheckoutState : null,
  editCartItem: 0,
  postingOrder: false,
  postOrderResponse: null,
  postOrderError: null,
  shippingAddress: {
    city: 'your city'
  },
  promotion: null,
  miniCartPosition: 0,
};

const freshInitialState = _.cloneDeep(initialState);
export { freshInitialState as initialState };

function reducer(state = initialState, action) {
  let newAttrs, newState;
  const currentItem = getCurrentCartItem(state);

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

      if (currentItem.autoUpdateCoordinates && newAttrs.mapCenter) {
        newAttrs.labelText = coordToPrettyText(newAttrs.mapCenter);
      }

      return extendCurrentCartItem(state, _.omitBy(newAttrs, _.isNil));

    case actions.SET_MAP_LABELS:
      newAttrs = {
        labelsEnabled: action.payload.enabled,
        labelHeader: action.payload.header,
        labelSmallHeader: action.payload.smallHeader,
        labelText: action.payload.text,
        autoUpdateCoordinates: action.payload.autoUpdateCoordinates,
      };

      if (_.isString(newAttrs.labelText) && !currentItem.autoUpdateCoordinates) {
        newAttrs.labelTextManual = newAttrs.labelText;
      }

      if (_.isBoolean(newAttrs.autoUpdateCoordinates)) {
        const willEnableAutoUpdate = !currentItem.autoUpdateCoordinates &&
                                      newAttrs.autoUpdateCoordinates;

        if (willEnableAutoUpdate) {
          newAttrs.labelText = coordToPrettyText(currentItem.mapCenter);
        } else {
          newAttrs.labelText = currentItem.labelTextManual;
        }
      }

      return extendCurrentCartItem(state, _.omitBy(newAttrs, _.isNil));

    case actions.SET_MAP_STYLE:
      return extendCurrentCartItem(state, { mapStyle: action.payload });

    case actions.SET_POSTER_STYLE:
      let posterStyle = action.payload;
      const posterLook = getPosterLook(posterStyle);

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
      newEmptyItem.id = getItemId();
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
        // pick the nearest one
        const isSelectedTheLast = removeIndex === state.cart.length - 1;
        newEditCartItem = isSelectedTheLast
          ? newState.editCartItem - 1
          : newState.editCartItem;
      }

      newState.editCartItem = newEditCartItem;
      newState.cart.splice(removeIndex, 1);
      return newState;

    case actions.SET_PROMOTION:
      return _.extend({}, state, {
        promotion: action.payload,
      });

    case actions.SET_MINI_CART_POSITION:
      return _.extend({}, state, {
        miniCartPosition: action.payload,
      });

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
      newState = _.extend({}, state, { checkoutFormState: action.payload });
      if (_.get(action.payload, 'giftCardCustomizeForm.values.giftCardType') === 'digital') {
        newState.giftCardCart = _.filter(newState.giftCardCart, i => i.type === 'giftCardValue');
      } else {
        const valueItem = _.find(newState.giftCardCart, i => i.type === 'giftCardValue');
        newState.giftCardCart = [
          valueItem,
          { type: 'physicalGiftCard', quantity: 1 }
        ];
      }

      return newState;

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