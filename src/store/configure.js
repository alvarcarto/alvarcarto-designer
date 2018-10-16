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

function setUrl(state) {
  const currentQuery = queryString.parse(window.location.search)
  const newQuery = _.extend({}, currentQuery, {
    cart: JSON.stringify(state.cart),
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
    if (UPDATE_CART) {
      setTimeout(() => {
        const state = store.getState();
        debouncedSetUrl(state);
      }, 0);
    }

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