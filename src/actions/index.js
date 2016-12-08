import * as actions from '../action-types';

export const setMapView = (view) => ({
  type: actions.SET_MAP_VIEW,
  payload: view
});

export const setMapStyle = (style) => ({
  type: actions.SET_MAP_STYLE,
  payload: style
});
