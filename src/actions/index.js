import * as actions from '../action-types';

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
