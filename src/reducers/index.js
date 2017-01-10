import _ from 'lodash';
import * as actions from '../action-types';
import { coordToPrettyText } from '../util';

const HELSINKI_CENTER = { lat: 60.159865, lng: 24.942334 };
const initialState = {
  mapCenter: HELSINKI_CENTER,
  mapZoom: 8,
  mapStyle: 'mapbox-orange',
  mapPitch: 0,
  mapBearing: 0,
  orientation: 'portrait',
  size: '50x70cm',
  labelHeader: 'Helsinki',
  labelSmallHeader: 'Finland',
  labelText: coordToPrettyText(HELSINKI_CENTER),
};

function reducer(state = initialState, action) {
  let newAttrs;

  switch (action.type) {
    case actions.SET_MAP_VIEW:
      newAttrs = {
        mapCenter: action.payload.center,
        mapZoom: action.payload.zoom,
        mapPitch: action.payload.pitch,
        mapBearing: action.payload.bearing,
      };

      return _.extend({}, state, _.omitBy(newAttrs, _.isNil));

    case actions.SET_MAP_LABELS:
      newAttrs = {
        labelHeader: action.payload.header,
        labelSmallHeader: action.payload.smallHeader,
        labelText: action.payload.text,
      };

      return _.extend({}, state, _.omitBy(newAttrs, _.isNil));

    case actions.SET_MAP_STYLE:
      return _.extend({}, state, { mapStyle: action.payload });

    case actions.SET_POSTER_LAYOUT:
      newAttrs = {
        orientation: action.payload.orientation,
        size: action.payload.size,
      };

      return _.extend({}, state, _.omitBy(newAttrs, _.isNil));

    default:
      return state;
  }
}

export default reducer;