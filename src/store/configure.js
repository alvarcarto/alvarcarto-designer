import _ from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import analytics from 'redux-analytics';
import { triggerAnalyticsEvent } from '../util/analytics';
import rootReducer from '../reducers'

const configureStore = preloadedState => {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }
  middlewares.push(thunk);

  const analyticsMw = analytics(({ type, payload }) => triggerAnalyticsEvent(_.merge({}, {
    event: type,
  }, payload)));
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