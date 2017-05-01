import _ from 'lodash';
import * as actions from '../action-types';
import * as stripeUtil from '../util/stripe';
import * as api from '../util/api';

export const setLocation = (location) => ({
  type: actions.SET_LOCATION,
  payload: location,
});

export const setMapView = (view) => ({
  type: actions.SET_MAP_VIEW,
  payload: view,
});

export const setMapLabels = (labels) => ({
  type: actions.SET_MAP_LABELS,
  payload: labels,
});

export const setMapStyle = (style) => ({
  type: actions.SET_MAP_STYLE,
  payload: style,
});

export const setPosterLayout = (layout) => ({
  type: actions.SET_POSTER_LAYOUT,
  payload: layout,
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

export const postOrder = (payload) => function(dispatch) {
  dispatch({ type: actions.POST_ORDER_REQUEST, payload });

  const addressObj = payload.differentBillingAddress
    ? payload.billingAddress
    : payload.shippingAddress;

  return stripeUtil.createToken(payload.stripeElement, {
    // Optional by Stripe
    name: _.get(addressObj, 'personName'),
    address_zip: _.get(addressObj, 'postalCode'),
    address_line1: _.get(addressObj, 'streetAddress'),
    address_line2: _.get(addressObj, 'streetAddressExtra'),
    address_city: _.get(addressObj, 'city'),
    address_state: _.get(addressObj, 'state'),
    address_country: _.get(addressObj, 'countryCode'),
  })
    .then((stripeResponseToken) => {
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
      const order = {
        email: payload.email,
        differentBillingAddress: Boolean(payload.differentBillingAddress),
        emailSubscription: Boolean(payload.emailSubscription),
        shippingAddress: payload.shippingAddress,
        billingAddress: payload.billingAddress,
        stripeTokenResponse: stripeResponseToken,
        cart: payload.cart,
      };
      return api.postOrder(order);
    })
    .then(response => {
      dispatch({
        type: actions.POST_ORDER_SUCCESS,
        payload: response,
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

export const checkoutFormStateChange = (payload) => ({
  type: actions.CHECKOUT_FORM_STATE_CHANGE,
  payload: payload,
});
