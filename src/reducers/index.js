import _ from 'lodash';
import * as actions from '../action-types';
import {
  coordToPrettyText,
  getQuery,
  getPosterLook,
  sizeToPosterSku,
} from '../util';
import { getItemId, getInitialCartItem, cartItemToMapItem } from '../util/cart-state';
import dummyCheckoutState from '../util/dummy-checkout-state';
import history from '../history';
import { findClosestSizeForOtherSizeType } from 'alvarcarto-common';

const DEBUG = getQuery('debug', 'boolean', false);

const initialState = {
  debug: DEBUG,
  apiKey: getQuery('apiKey', 'string'),
  location: history.location,
  initialLoadTime: new Date(),
  currency: 'EUR',
  cart: [],
  additionalCart: [{
    sku: 'shipping-express',
    quantity: 1
  }],
  giftCardCart: [
    {
      sku: 'gift-card-value',
      quantity: 1,
      customisation: {
        netValue: getQuery('value', 'integer', 4900),
      }
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
  notificationMessage: null,
};

const freshInitialState = _.cloneDeep(initialState);
export { freshInitialState as initialState };

function reducer(state = initialState, action) {
  let newAttrs, newState;
  const currentItem = getCurrentCartItem(state);

  switch (action.type) {
    case actions.SET_LOCATION:
      return _.extend({}, state, { location: action.payload });

    case actions.SET_CART:
      return _.extend({}, state, { cart: action.payload });

    case actions.SET_MAP_VIEW:
      newAttrs = {
        customisation: {
          mapCenter: action.payload.center,
          mapBounds: action.payload.bounds,
          mapZoom: action.payload.zoom,
          mapPitch: action.payload.pitch,
          mapBearing: action.payload.bearing,
        },
      };

      if (currentItem.autoUpdateCoordinates && newAttrs.customisation.mapCenter) {
        newAttrs.customisation.labelText = coordToPrettyText(newAttrs.customisation.mapCenter);
      }

      return extendCurrentCartItem(state, _.omitBy(newAttrs, _.isNil));

    case actions.SET_MAP_LABELS:
      newAttrs = {
        customisation: {
          labelsEnabled: action.payload.enabled,
          labelHeader: action.payload.header,
          labelSmallHeader: action.payload.smallHeader,
          labelText: action.payload.text,
          autoUpdateCoordinates: action.payload.autoUpdateCoordinates,
        }
      };

      if (_.isString(newAttrs.customisation.labelText) && !currentItem.autoUpdateCoordinates) {
        newAttrs.customisation.labelTextManual = newAttrs.labelText;
      }

      if (_.isBoolean(newAttrs.autoUpdateCoordinates)) {
        const willEnableAutoUpdate = !currentItem.autoUpdateCoordinates &&
                                      newAttrs.autoUpdateCoordinates;

        if (willEnableAutoUpdate) {
          newAttrs.customisation.labelText = coordToPrettyText(currentItem.customisation.mapCenter);
        } else {
          newAttrs.customisation.labelText = currentItem.labelTextManual;
        }
      }

      return extendCurrentCartItem(state, _.omitBy(newAttrs, _.isNil));

    case actions.SET_MAP_STYLE:
      return extendCurrentCartItem(state, { customisation: { mapStyle: action.payload } });

    case actions.SET_NOTIFICATION_MESSAGE:
      return _.extend({}, state, { notificationMessage: action.payload });

    case actions.SET_POSTER_STYLE:
      let posterStyle = action.payload;
      const posterLook = getPosterLook(posterStyle);

      if (_.isArray(posterLook.allowedMapStyles) && !_.includes(posterLook.allowedMapStyles, currentItem.customisation.mapStyle)) {
        return extendCurrentCartItem(state, {
          customisation: {
            mapStyle: posterLook.allowedMapStyles[0],
            posterStyle: action.payload,
          },
        });
      }

      return extendCurrentCartItem(state, { customisation: { posterStyle: action.payload } });

    case actions.SET_POSTER_LAYOUT:
      newAttrs = {
        customisation: {
          orientation: action.payload.orientation,
        }
      };
      let newSize = action.payload.size;
      const currentMapItem = cartItemToMapItem(currentItem);
      if (action.payload.sizeType) {
        // If the size type was changed to e.g. inches, we'll also set the selected size to
        // match the closest inch size
        const sizeToMatch = action.payload.size || currentMapItem.size;
        newSize = findClosestSizeForOtherSizeType(sizeToMatch, action.payload.sizeType).id;
      }

      if (newSize) {
        newAttrs.sku = sizeToPosterSku(newSize);
      }

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
      const newEmptyItem = _.cloneDeep(getInitialCartItem());
      newEmptyItem.id = getItemId();

      // Copy basic attributes from the currently selected map
      newEmptyItem.sku = currentItem.sku;
      newEmptyItem.customisation.orientation = currentItem.customisation.orientation;
      newEmptyItem.customisation.mapStyle = currentItem.customisation.mapStyle;
      newEmptyItem.customisation.posterStyle = currentItem.customisation.posterStyle;

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
        newState.giftCardCart = _.filter(newState.giftCardCart, i => i.sku === 'gift-card-value');
      } else {
        const valueItem = _.find(newState.giftCardCart, i => i.type === 'gift-card-value');
        newState.giftCardCart = [
          valueItem,
          { sku: 'physical-gift-card', quantity: 1 }
        ];
      }

      if (_.get(action.payload, 'shippingMethodForm.values.shippingMethod') === 'fast') {
        newState.additionalCart = [
          {
            sku: 'shipping-express',
            quantity: 1,
          },
          {
            sku: 'production-high-priority',
            quantity: 1,
          }
        ];
      } else {
        newState.additionalCart = _.cloneDeep(initialState.additionalCart);
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