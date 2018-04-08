import _ from 'lodash';
import BPromise from 'bluebird';
import { calculateCartPrice } from 'alvarcarto-price-util';
import * as actions from '../action-types';
import * as stripeUtil from '../util/stripe';
import * as api from '../util/api';
import { stringEqualsIgnoreWhitespace } from '../util';

export const setLocation = (location) => {
  const action = {
    type: actions.SET_LOCATION,
    payload: location,
  };

  if (location.pathname === '/checkout') {
    action.meta = {
      analytics: {
        type: 'designInitiateCheckout',
      },
    };
  }

  return action;
};

export const setMapView = (view) => ({
  type: actions.SET_MAP_VIEW,
  payload: view,
  meta: {
    analytics: [
      {
        type: 'designViewContent',
        meta: { debounce: 1000, minTimeOnPage: 2000 },
      },
      {
        type: 'designSetMapView',
        // payload set later
        meta: { debounce: 1000, minTimeOnPage: 2000 },
      },
    ],
  },
});

export const setMapLabels = (labels) => {
  const action = {
    type: actions.SET_MAP_LABELS,
    payload: labels,
    meta: { analytics: [] },
  };

  if (_.has(labels, 'enabled')) {
    action.meta.analytics.push({
      type: 'designSetPrintLabels',
      payload: {
        userActionParameter: labels.enabled ? 'true' : 'false',
      },
    });
  }
  if (_.has(labels, 'header')) {
    action.meta.analytics.push({
      type: 'designSetLabelHeader',
      payload: {
        userActionParameter: labels.header,
      },
      meta: {
        debounce: 1000,
      },
    });
  }
  if (_.has(labels, 'smallHeader')) {
    action.meta.analytics.push({
      type: 'designSetLabelSmallHeader',
      payload: {
        userActionParameter: labels.smallHeader,
      },
      meta: {
        debounce: 1000,
      },
    });
  }
  if (_.has(labels, 'text')) {
    action.meta.analytics.push({
      type: 'designSetLabelText',
      payload: {
        userActionParameter: labels.text,
      },
      meta: {
        debounce: 1000,
      },
    });
  }

  return action;
};

export const setMapStyle = (style) => ({
  type: actions.SET_MAP_STYLE,
  payload: style,
  meta: {
    analytics: [
      {
        type: 'designViewContent',
      },
      {
        type: 'designSetMapStyle',
        payload: {
          userActionParameter: style,
        },
      }
    ],
  },
});

export const setPosterStyle = (style) => ({
  type: actions.SET_POSTER_STYLE,
  payload: style,
  meta: {
    analytics: [
      {
        type: 'designViewContent',
      },
      {
        type: 'designSetPosterStyle',
        payload: {
          userActionParameter: style,
        },
      }
    ],
  },
});

export const setPosterLayout = (layout) => {
  const action = {
    type: actions.SET_POSTER_LAYOUT,
    payload: layout,
    meta: { analytics: [] },
  };

  if (_.has(layout, 'orientation')) {
    action.meta.analytics.push({
      type: 'designSetPosterOrientation',
      payload: {
        userActionParameter: layout.orientation,
      },
    });
  }
  if (_.has(layout, 'size')) {
    action.meta.analytics.push({
      type: 'designSetPosterSize',
      payload: {
        userActionParameter: layout.size,
      },
    });
  }

  return action;
};

export const addCartItem = () => ({
  type: actions.ADD_CART_ITEM,
  meta: {
    analytics: {
      type: 'designAddCartItem',
      // payload enrichened in analytics.js
    },
  },
});

export const removeCartItem = (index) => ({
  type: actions.REMOVE_CART_ITEM,
  payload: index,
  meta: {
    analytics: {
      type: 'designRemoveCartItem',
      // payload added later
    },
  },
});

export const editCartItem = (index) => ({
  type: actions.EDIT_CART_ITEM,
  payload: index,
  meta: {
    analytics: {
      type: 'designEditCartItem',
      payload: {
        userActionParameter: index,
      },
    },
  },
});

export const addCartItemQuantity = (payload) => {
  const action = {
    type: actions.ADD_CART_ITEM_QUANTITY,
    payload: payload,
    meta: { analytics: [] },
  };

  if (payload.add < 0) {
    action.meta.analytics.push({
      type: 'designDecreaseCartItemQuantity',
      payload,
      // payload will be changed later
      meta: { debounce: 1000 },
    });
  } else {
    action.meta.analytics.push({
      type: 'designIncreaseCartItemQuantity',
      payload,
      // payload will be changed later
      meta: { debounce: 1000 },
    });
  }

  return action;
};

export const setPromotion = (payload) => {
  const action = {
    type: actions.SET_PROMOTION,
    payload: payload,
  };

  if (_.get(payload, 'promotionCode')) {
    action.meta = {
      analytics: {
        type: 'designAddPromotion',
        payload: {
          userActionParameter: payload.promotionCode,
        },
      },
    };
  }

  return action;
};

export const setMiniCartPosition = (pos) => ({
  type: actions.SET_MINI_CART_POSITION,
  payload: pos,
});

export const postOrder = (payload) => function(dispatch) {
  dispatch({ type: actions.POST_ORDER_REQUEST, payload });

    return _createStripeToken(payload).then((stripeResponseToken) => {
      // WARNING: ONLY USE CREDIT CARD DETAILS FROM STRIPE RESPONSE
      // Do NOT send the full credit card number, CVC or any
      // more detailed credit card info to our API.
      // Last 4 digits etc which are in stripe response are ok.
      // https://support.stripe.com/questions/what-information-can-i-safely-store-about-my-users-payment-information
      //  "The only sensitive data that you want to avoid handling is your customers'
      //  credit card number and CVC; other than that, you’re welcome to store
      //  any other information on your local machines.
      //  As a good rule, you can store anything returned by our API. In particular,
      //  you would not have any issues storing the last four digits of your
      //  customer’s card number or the expiration date for easy reference."
      const isFreeOrder = _.isNull(stripeResponseToken);
      const differentBillingAddress = isFreeOrder
        ? false
        : Boolean(payload.differentBillingAddress);

      const order = {
        email: payload.email,
        differentBillingAddress,
        emailSubscription: Boolean(payload.emailSubscription),
        shippingAddress: payload.shippingAddress,
        billingAddress: isFreeOrder
          ? undefined
          : payload.billingAddress,
        cart: payload.cart.concat(payload.additionalCart),
        stripeTokenResponse: isFreeOrder
          ? undefined
          : stripeResponseToken,
        promotionCode: _.get(payload, 'promotion.promotionCode'),
      };

      const shippingAddressName = _.get(payload, 'shippingAddress.personName');
      const creditCardPersonName = _.get(payload, 'creditCardPersonName');

      if (!isFreeOrder && differentBillingAddress) {
        // Using different billing address, add name on card to that address
        order.billingAddress = _.merge({}, payload.billingAddress, {
          personName: creditCardPersonName,
        });
        order.differentBillingAddress = true;
      } else if (!isFreeOrder && !stringEqualsIgnoreWhitespace(creditCardPersonName, shippingAddressName)) {
        // Person chose to use shipping address also as billing address, but
        // they gave a different name for credit card
        order.billingAddress = _.merge({}, payload.shippingAddress, {
          personName: creditCardPersonName,
        });
        order.differentBillingAddress = true;
      }

      return api.postOrder(order);
    })
    .then(response => {
      const combinedCart = payload.cart.concat(payload.additionalCart);
      const price = calculateCartPrice(combinedCart);

      dispatch({
        type: actions.POST_ORDER_SUCCESS,
        payload: response,
        meta: {
          analytics: {
            type: 'designPurchase',
            payload: {
              userActionParameter: price.humanValue,
              cartItemsAmount: payload.cart.length,
              cartTotalPrice: price.humanValue,
              priceCurrency: price.currency,
            },
          },
        },
      });

      return response;
    })
    .catch(err => {
      dispatch({
        type: actions.POST_ORDER_FAILURE,
        payload: err,
        error: true,
        meta: {
          analytics: {
            type: 'designPurchaseError',
            payload: {
              userActionParameter: err.message,
            },
          },
        },
      });

      throw err;
    });
};

function _createStripeToken(payload) {
  const { cart, additionalCart, promotion } = payload;
  const combinedCart = cart.concat(additionalCart);
  const totalPrice = calculateCartPrice(combinedCart, { promotion, ignorePromotionExpiry: true });
  const isFreeOrder = totalPrice.value <= 0;
  if (isFreeOrder) {
    return BPromise.resolve(null);
  }

  const differentBillingAddress = Boolean(payload.differentBillingAddress);
  const addressObj = differentBillingAddress
    ? payload.billingAddress
    : payload.shippingAddress;

  return stripeUtil.createToken(payload.stripeElement, {
    // Optional by Stripe
    name: _.get(payload, 'creditCardPersonName'),
    address_zip: _.get(addressObj, 'postalCode'),
    address_line1: _.get(addressObj, 'streetAddress'),
    address_line2: _.get(addressObj, 'streetAddressExtra'),
    address_city: _.get(addressObj, 'city'),
    address_state: _.get(addressObj, 'state'),
    address_country: _.get(addressObj, 'countryCode'),
  });
}

export const checkoutFormStateChange = (payload) => {
  const action = {
    type: actions.CHECKOUT_FORM_STATE_CHANGE,
    payload: payload,
    meta: { analytics: [] },
  };

  if (_.get(payload, 'creditCardForm.isValid')) {
    action.meta.analytics.push({
      type: 'designAddPaymentInfo',
      payload: { userActionParameter: 'valid' },
      meta: {
        maxFireTimes: 1,
      },
    });
  }

  if (_.get(payload, 'emailForm.isValid')) {
    action.meta.analytics.push({
      type: 'designAddValidEmail',
      payload: { userActionParameter: 'valid' },
      meta: {
        maxFireTimes: 1,
      },
    });
  }

  if (_.get(payload, 'shippingAddressForm.isValid')) {
    action.meta.analytics.push({
      type: 'designAddValidShippingAddress',
      payload: { userActionParameter: 'valid' },
      meta: {
        maxFireTimes: 1,
      },
    });
  }

  if (_.get(payload, 'billingAddressForm.isValid')) {
    action.meta.analytics.push({
      type: 'designAddValidBillingAddress',
      payload: { userActionParameter: 'valid' },
      meta: {
        maxFireTimes: 1,
      },
    });
  }

  return action;
}
