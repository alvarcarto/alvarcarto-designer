import _ from 'lodash';
import BPromise from 'bluebird';
import { calculateCartPrice } from 'alvarcarto-price-util';
import * as actions from '../action-types';
import * as stripeUtil from '../util/stripe';
import * as api from '../util/api';
import { stringEqualsIgnoreWhitespace, getQuery } from '../util';
import {
  getQueryCart,
  getInitialCartItem,
  getCartItemFromLocation,
} from '../util/cart-state';

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

export const setCurrency = (currency) => ({
  type: actions.SET_CURRENCY,
  payload: currency,
  meta: {
    analytics: [
      {
        type: 'designSetCurrency',
        payload: {
          userActionParameter: currency,
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

export const setNotificationMessage = (message) => ({
  type: actions.SET_NOTIFICATION_MESSAGE,
  payload: message,
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

export const setCart = (cart) => ({
  type: actions.SET_CART,
  payload: cart,
});

export const setInitialCart = () => async function(dispatch) {
  const cartFromQuery = getQueryCart();
  if (cartFromQuery) {
    dispatch({ type: actions.SET_CART, payload: cartFromQuery });
    return;
  }

  // We use lat to detect if the query parameters contain a location already
  const cartItem = getInitialCartItem();
  if (getQuery('lat', 'float') && getQuery('lng', 'float')) {
    dispatch({ type: actions.SET_CART, payload: [cartItem] });
    return;
  }

  api.getGeoInformation({ timeout: 600 })
    .then((data) => {
      if (!data) {
        dispatch({ type: actions.SET_CART, payload: [cartItem] });
        return;
      }

      const locationCartItem = getCartItemFromLocation(data);
      dispatch({ type: actions.SET_CART, payload: [locationCartItem] });
    })
    .catch(() => {
      dispatch({ type: actions.SET_CART, payload: [cartItem] });
    })
};

export const setCurrentPromotion = () => async function(dispatch) {
  try {
    const res = await api.getCurrentPromotion();
    if (res && res.status === 200) {
      dispatch(setPromotion(res.data));
    }
  } catch (e) {
    // Ignore
  }
};

export const setCurrentMessage = () => async function(dispatch) {
  try {
    const res = await api.getCurrentMessage();
    if (res && res.status === 200) {
      dispatch(setNotificationMessage(res.data));
    }
  } catch (e) {
    // Ignore
  }
};

export const postOrder = (payload) => async function(dispatch) {
  dispatch({ type: actions.POST_ORDER_REQUEST, payload });

  try {
    const combinedCart = payload.cart.concat(payload.additionalCart);
    const totalPrice = calculateCartPrice(combinedCart, {
      currency: payload.currency,
      promotion: payload.promotion
    });
    const isFreeOrder = totalPrice.value <= 0;

    const differentBillingAddress = isFreeOrder
      ? false
      : Boolean(payload.differentBillingAddress);

    const order = {
      email: payload.email,
      currency: payload.currency,
      differentBillingAddress,
      emailSubscription: Boolean(payload.emailSubscription),
      shippingAddress: payload.shippingAddress,
      billingAddress: isFreeOrder
        ? undefined
        : payload.billingAddress,
      cart: combinedCart,
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

    const response = await api.postOrder(order);
    await handleCardPayment(payload, response.data, totalPrice)

    dispatch({
      type: actions.POST_ORDER_SUCCESS,
      payload: response,
      meta: {
        analytics: {
          type: 'designPurchase',
          payload: {
            userActionParameter: Number(totalPrice.humanValue),
            cartItemsAmount: payload.cart.length,
            orderId: response.data.orderId,
            cartTotalPrice: Number(totalPrice.humanValue),
            priceCurrency: totalPrice.currency,
          },
        },
      },
    });

    return response;
  } catch (err) {
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
  }
};

function handleCardPayment(checkoutPayload, receivedData, totalPrice) {
  const isFreeOrder = totalPrice.value <= 0;
  if (isFreeOrder) {
    return BPromise.resolve(null);
  }

  const differentBillingAddress = Boolean(checkoutPayload.differentBillingAddress);
  const addressObj = differentBillingAddress
    ? checkoutPayload.billingAddress
    : checkoutPayload.shippingAddress;

  return stripeUtil.handleCardPayment(
    receivedData.stripePaymentIntent.client_secret,
    checkoutPayload.stripeElement,
    {
      payment_method_data: {
        billing_details: {
          // Optional by Stripe
          name: _.get(checkoutPayload, 'creditCardPersonName'),
          address: {
            postal_code: _.get(addressObj, 'postalCode'),
            line1: _.get(addressObj, 'streetAddress'),
            line2: _.get(addressObj, 'streetAddressExtra'),
            city: _.get(addressObj, 'city'),
            state: _.get(addressObj, 'state'),
            country: _.get(addressObj, 'countryCode'),
          }
        }
      }
    }
  )
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
