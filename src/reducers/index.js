import _ from 'lodash';
import * as actions from '../action-types';

const HELSINKI_CENTER = { lat: 60.159865, lng: 24.942334 };
const initialState = {
  mapCenter: HELSINKI_CENTER,
  mapZoom: 8,
  //mapStyle: 'http://tiles.alvarcarto.com:8000/styles/basic-v9.json',
  mapStyle: 'light'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_MAP_VIEW:
      const newAttrs = {
        mapCenter: action.payload.center,
        mapZoom: action.payload.zoom
      };

      return _.extend({}, state, _.omitBy(newAttrs, _.isNil));

    case actions.SET_MAP_STYLE:
      return _.extend({}, state, { mapStyle: action.payload });

    default:
      return state;
  }
}

export default reducer;