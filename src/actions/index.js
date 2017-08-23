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
    analytics: {
      type: 'designViewContent',
    },
  },
});

export const setMapLabels = (labels) => ({
  type: actions.SET_MAP_LABELS,
  payload: labels,
});

export const setMapStyle = (style) => ({
  type: actions.SET_MAP_STYLE,
  payload: style,
  meta: {
    analytics: {
      type: 'designViewContent',
    },
  },
});

export const setPosterStyle = (style) => ({
  type: actions.SET_POSTER_STYLE,
  payload: style,
  meta: {
    analytics: {
      type: 'designViewContent',
    },
  },
});

export const setPosterLayout = (layout) => ({
  type: actions.SET_POSTER_LAYOUT,
  payload: layout,
  meta: {
    analytics: {
      type: 'designChangeOrientation',
      payload: {
        orientation: layout,
      },
    },
  },
});

export const addCartItem = () => ({
  type: actions.ADD_CART_ITEM,
});

export const removeCartItem = (index) => ({
  type: actions.REMOVE_CART_ITEM,
  payload: index,
});

export const editCartItem = (index) => ({
  type: actions.EDIT_CART_ITEM,
  payload: index,
});

export const addCartItemQuantity = (payload) => ({
  type: actions.ADD_CART_ITEM_QUANTITY,
  payload: payload,
});

export const setPromotion = (payload) => ({
  type: actions.SET_PROMOTION,
  payload: payload,
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
        billingAddress: payload.billingAddress,
        cart: payload.cart,
        stripeTokenResponse: isFreeOrder
          ? undefined
          : stripeResponseToken,
        promotionCode: payload.promotion.promotionCode,
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
      const price = calculateCartPrice(payload.cart);

      dispatch({
        type: actions.POST_ORDER_SUCCESS,
        payload: response,
        meta: {
          analytics: {
            type: 'designPurchase',
            payload: {
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
      });

      throw err;
    });
};

function _createStripeToken(payload) {
  const { cart, promotion } = payload;
  const totalPrice = calculateCartPrice(cart, promotion, { ignorePromotionExpiry: true });
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
  };

  if (_.get(payload, 'creditCardForm.isValid')) {
    action.meta = {
      analytics: {
        type: 'designAddPaymentInfo',
      },
    };
  }

  return action;
}
