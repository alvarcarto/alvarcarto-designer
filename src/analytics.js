import _ from 'lodash';
import BPromise from 'bluebird';
import { createProductId } from 'alvarcarto-common';
import { triggerGtmEvent } from './util/gtm';
import { getCities } from './util/api';

// Keep this state while application is running in user's browser
const firedCount = {};
const timeouts = {};

export function handleAnalyticsEvent(analyticsInfo, state) {
  if (_.isArray(analyticsInfo)) {
    return BPromise.map(analyticsInfo, (singleInfo) =>
      _handleSingleEvent(singleInfo, state)
    );
  } else {
    return _handleSingleEvent(analyticsInfo, state);
  }
}

function _handleSingleEvent(analyticsInfo, state) {
  const { type, payload } = analyticsInfo;

  const maxFireTimes = _.get(analyticsInfo, 'meta.maxFireTimes', Infinity);
  if (getFiredCount(type) >= maxFireTimes) {
    return;
  }

  const debounce = _.get(analyticsInfo, 'meta.debounce');
  if (debounce) {
    return startTimeout(type, () => _fireSingleEvent(analyticsInfo, state), debounce);
  }

  return _fireSingleEvent(analyticsInfo, state);
}

function _fireSingleEvent(analyticsInfo, state) {
  const { type, payload } = analyticsInfo;
  const handler = handlers[type];

  if (_.isFunction(handler)) {
    return BPromise.resolve(handler(type, payload, state))
      .then(() => increaseFiredCount(type));
  } else {
    triggerGtmEvent({
      event: type,
      payload,
    });

    increaseFiredCount(type);
  }
}

function increaseFiredCount(type) {
  if (!_.has(firedCount, type)) {
    firedCount[type] = 1;
  } else {
    firedCount[type] += 1;
  }
}

function startTimeout(type, cb, ms) {
  cancelTimeout(type);
  timeouts[type] = window.setTimeout(cb, ms);
}

function cancelTimeout(type) {
  if (timeouts[type]) {
    window.clearTimeout(timeouts[type]);
  }
}

function getFiredCount(type) {
  if (!_.has(firedCount, type)) {
    return 0;
  }
  return firedCount[type];
}

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

const handlers = {};
handlers.designViewContent = (type, payload, state) => {
  const mapItem = getCurrentCartItem(state);
  return getCities(mapItem.mapCenter)
    .then((res) => {
      const cities = res.data;
      if (!_.isArray(cities) || cities.length < 1) {
        return;
      }

      triggerGtmEvent({
        event: type,
        productIds: [getProductId(mapItem, cities[0].id)],
      });
    });
};

handlers.designInitiateCheckout = (type, payload, state) => {
  return BPromise.map(state.cart, item => {
    return getCities(item.mapCenter)
      .then(res => res.data);
  })
    .then(arrOfCities => {
      triggerGtmEvent({
        event: type,
        productIds: getCartProductIds(state, arrOfCities),
      });
    });
};

handlers.designPurchase = (type, payload, state) => {
  return BPromise.map(state.cart, item => {
    return getCities(item.mapCenter)
      .then(res => res.data);
  })
    .then(arrOfCities => {
      triggerGtmEvent({
        event: type,
        productIds: getCartProductIds(state, arrOfCities),
      });
    });
};

handlers.designAddPaymentInfo = (type, payload, state) => {
  return BPromise.map(state.cart, item => {
    return getCities(item.mapCenter)
      .then(res => res.data);
  })
    .then(arrOfCities => {
      triggerGtmEvent({
        event: type,
        productIds: getCartProductIds(state, arrOfCities),
      });
    });
};

handlers.designAddCartItem = (type, payload, state) => {
  triggerGtmEvent({
    event: type,
    payload: {
      userActionParameter: state.cart.length
    },
  });
};

handlers.designRemoveCartItem = (type, payload, state) => {
  triggerGtmEvent({
    event: type,
    payload: {
      userActionParameter: state.cart.length
    },
  });
};

handlers.designDecreaseCartItemQuantity = (type, payload, state) => {
  const newQuantity = state.cart[payload.index].quantity;
  triggerGtmEvent({
    event: type,
    payload: {
      userActionParameter: newQuantity,
    },
  });
};

handlers.designIncreaseCartItemQuantity = (type, payload, state) => {
  const newQuantity = state.cart[payload.index].quantity;
  triggerGtmEvent({
    event: type,
    payload: {
      userActionParameter: newQuantity,
    },
  });
};

handlers.designSetMapView = (type, payload, state) => {
  const item = getCurrentCartItem(state);
  const param = [
    `LAT:${item.mapCenter.lat.toFixed(4)}`,
    `LNG:${item.mapCenter.lng.toFixed(4)}`,
    `Z:${item.mapZoom}`,
  ].join(' ');

  triggerGtmEvent({
    event: type,
    payload: {
      userActionParameter: param,
    },
  });
};
