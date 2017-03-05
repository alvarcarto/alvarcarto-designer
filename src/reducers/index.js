import _ from 'lodash';
import * as actions from '../action-types';
import { coordToPrettyText } from '../util';
import history from '../history';

const HELSINKI_CENTER = { lat: 60.159865, lng: 24.942334 };
const initialState = {
  location: history.location,
  cart: [
    {
      quantity: 1,
      mapCenter: HELSINKI_CENTER,
      mapBounds: null,
      mapZoom: 8,
      mapStyle: 'bw',
      mapPitch: 0,
      mapBearing: 0,
      orientation: 'portrait',
      size: '30x40cm',
      labelsEnabled: true,
      labelHeader: 'Helsinki',
      labelSmallHeader: 'Finland',
      labelText: coordToPrettyText(HELSINKI_CENTER),
    }
  ],
  editCartItem: 0,
  postingOrder: false,
  postOrderResponse: null,
  postOrderError: null,
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
      return _.extend({}, state, { postingOrder: true, postOrderResponse: null, postOrderError: null });

    case actions.POST_ORDER_SUCCESS:
      return _.extend({}, state, { postingOrder: false, postOrderResponse: action.payload, postOrderError: null });

    case actions.POST_ORDER_FAILURE:
      return _.extend({}, state, { postingOrder: false, postOrderResponse: null, postOrderError: action.payload });

    default:
      return state;
  }
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