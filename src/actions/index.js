import * as actions from '../action-types';

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