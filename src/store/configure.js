import _ from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import queryString from 'query-string';
import analytics from '../middleware/redux-analytics';
import { handleAnalyticsEvent } from '../analytics';
import { getQuery } from '../util';
import rootReducer from '../reducers';

const REDUX_LOG = getQuery('reduxLog', 'boolean', false);
const UPDATE_CART = getQuery('updateCart', 'boolean', false);

function setCartUrl(state) {
  const currentQuery = queryString.parse(window.location.search)
  const newQuery = _.extend({}, currentQuery, {
    cart: JSON.stringify(state.cart),
  });

  window.history.pushState(null, null, `?${queryString.stringify(newQuery)}`);
}
const debouncedSetCartUrl = _.debounce(setCartUrl, 10);

// Even if user has multiple items in their cart, the url will only show the currently active map
// url
function setUrl(state) {
  const currentIndex = state.editCartItem;
  const currentQuery = queryString.parse(window.location.search)
  const newQuery = _.extend({}, currentQuery, {
    lat: state.cart[currentIndex].mapCenter.lat.toFixed(4),
    lng: state.cart[currentIndex].mapCenter.lng.toFixed(4),
    zoom: state.cart[currentIndex].mapZoom,
    size: state.cart[currentIndex].size,
    orientation: state.cart[currentIndex].orientation,
    mapStyle: state.cart[currentIndex].mapStyle,
    posterStyle: state.cart[currentIndex].posterStyle,
    labelsEnabled: state.cart[currentIndex].labelsEnabled,
    labelHeader: state.cart[currentIndex].labelHeader,
    labelSmallHeader: state.cart[currentIndex].labelSmallHeader,
    labelText: state.cart[currentIndex].labelText,
    updateCoords: state.cart[currentIndex].autoUpdateCoordinates,
  });

  window.history.pushState(null, null, `?${queryString.stringify(newQuery)}`);
}

const debouncedSetUrl = _.debounce(setUrl, 10);

const configureStore = preloadedState => {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development' || REDUX_LOG) {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }
  middlewares.push(thunk);

  const analyticsMw = analytics((analyticsInfo, state) => {
    // No need to wait for these to finish
    handleAnalyticsEvent(analyticsInfo, state);
  });
  middlewares.push(analyticsMw);

  const locationMiddleware = store => next => action => {
    setTimeout(() => {
      const state = store.getState();
      if (UPDATE_CART) {
        debouncedSetCartUrl(state);
      } else {
        debouncedSetUrl(state);
      }
    }, 0);

    next(action);
  };
  middlewares.push(locationMiddleware);

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
    ),
  );

  return store;
}

export default configureStore;