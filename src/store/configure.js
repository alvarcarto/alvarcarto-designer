import _ from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import analytics from '../middleware/redux-analytics';
import { handleAnalyticsEvent } from '../analytics';
import rootReducer from '../reducers'

const configureStore = preloadedState => {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
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

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}

export default configureStore;