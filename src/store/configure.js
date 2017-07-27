import BPromise from 'bluebird';
import _ from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import analytics from 'redux-analytics';
import { getCities } from '../util/api';
import { createProductId } from 'alvarcarto-common';
import { triggerAnalyticsEvent } from '../util/analytics';
import rootReducer from '../reducers'

function getCurrentCartItem(state) {
  const index = state.editCartItem;
  return state.cart[index];
}

function getProductId(item, cityId) {
  return createProductId({
    mapStyle: item.mapStyle,
    posterStyle: item.posterStyle,
    // Use fixed layout for FB ads
    size: '30x40cm',
    orientation: 'portrait',
    cityId,
  });
}

function getCartProductIds(state, arrOfCities) {
  const closeCities = _.map(arrOfCities, cities => _.head(cities));
  const ids = _.map(state.cart, (item, index) => {
    if (!closeCities[index]) {
      return null;
    }

    return getProductId(item, closeCities[index].id);
  });

  return _.filter(ids, i => !_.isNil(i));
}

const configureStore = preloadedState => {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }
  middlewares.push(thunk);

  const analyticsMw = analytics(({ type, payload }, state) => {
    if (type === 'designViewContent') {
      const mapItem = getCurrentCartItem(state);
      getCities(mapItem.mapCenter)
        .then((res) => {
          const cities = res.data;
          if (!_.isArray(cities) || cities.length < 1) {
            return;
          }

          triggerAnalyticsEvent({
            event: type,
            productIds: [getProductId(mapItem, cities[0].id)],
          });
        });
    } else if (type === 'designInitiateCheckout') {
      BPromise.map(state.cart, item => {
        return getCities(item.mapCenter)
          .then(res => res.data);
      })
        .then(arrOfCities => {
          triggerAnalyticsEvent({
            event: type,
            productIds: getCartProductIds(state, arrOfCities),
          });
        });
    } else if (type === 'designPurchase') {
      BPromise.map(state.cart, item => {
        return getCities(item.mapCenter)
          .then(res => res.data);
      })
        .then(arrOfCities => {
          triggerAnalyticsEvent({
            event: type,
            productIds: getCartProductIds(state, arrOfCities),
          });
        });
    } else if (type === 'designAddPaymentInfo') {
      BPromise.map(state.cart, item => {
        return getCities(item.mapCenter)
          .then(res => res.data);
      })
        .then(arrOfCities => {
          triggerAnalyticsEvent({
            event: type,
            productIds: getCartProductIds(state, arrOfCities),
          });
        });
    } else {
      triggerAnalyticsEvent(_.merge({}, {
        event: type,
      }, payload));
    }
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