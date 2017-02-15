import _ from 'lodash';
import * as actions from '../action-types';
import * as stripeUtil from '../util/stripe';
import * as api from '../util/api';

export const setViewState = (viewState) => ({
  type: actions.SET_VIEW_STATE,
  payload: viewState,
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
  dispatch({ type: actions.POST_ORDER_REQUEST });

  return stripeUtil.createToken({
    number: _.get(payload.creditCard, 'cc-number'),
    exp_month: _.get(payload.creditCard, 'cc-exp.month'),
    exp_year: _.get(payload.creditCard, 'cc-exp.year'),
    cvc: _.get(payload.creditCard, 'cc-cvc'),
    // Optional by Stripe
    name: _.get(payload.creditCard, 'cc-name'),
    address_zip: _.get(payload.billingAddress, 'postalCode'),
    address_line1: _.get(payload.billingAddress, 'address'),
    address_line2: _.get(payload.billingAddress, 'addressExtra'),
    address_city: _.get(payload.billingAddress, 'city'),
    address_state: _.get(payload.billingAddress, 'state'),
    address_country: _.get(payload.billingAddress, 'country'),
  })
    .then((response) => {
      // WARNING: ONLY USE CREDIT CARD DETAILS FROM STRIPE RESPONSE
      // Do NOT send the full credit card number, CVC or any
      // more detailed credit card info to our API.
      // Last 4 digits etc which are in stripe response are ok.
      const order = {
        email: payload.email,
        emailSubscription: payload.emailSubscription,
        shippingAddress: payload.shippingAddress,
        billingAddress: payload.billingAddress,
        stripeResponse: response,
        cart: payload.cart,
      };
      console.log('stripe response', response);
      return api.postOrder(payload);
    })
    .then(response => {
      console.log('api response', response);
      dispatch({
        type: actions.POST_ORDER_SUCCESS,
        payload: response,
      });
    })
    .catch(err => dispatch({
      type: actions.POST_ORDER_FAILURE,
      payload: err,
      error: true,
    }));
};
