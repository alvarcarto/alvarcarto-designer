import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

const configureStore = preloadedState => {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }

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