import _ from 'lodash';
import BPromise from 'bluebird';
import axios from 'axios';
import CONST from '../config';

export function postOrder(order) {
  return axios.post(`${CONST.REACT_APP_ORDER_API_URL}/api/orders`, order);
}

export function getOrder(orderId) {
  return axios.get(`${CONST.REACT_APP_ORDER_API_URL}/api/orders/${orderId}`);
}

export function getPromotion(code, axiosOpts) {
  return axios.get(`${CONST.REACT_APP_ORDER_API_URL}/api/promotions/${code}`, axiosOpts);
}

export function getCities(latLng, axiosOpts) {
  return axios.get(`${CONST.REACT_APP_ORDER_API_URL}/api/cities`, _.merge({
    params: latLng,
  }, axiosOpts));
}

export function getPlacementImages(axiosOpts) {
  return axios.get(`${CONST.REACT_APP_PLACEMENT_API_URL}/api/images`, axiosOpts);
}

export function getGeoInformation(axiosOpts) {
  return axios.get(`${CONST.REACT_APP_GEO_API_URL}/json/`, axiosOpts)
    .then(({ data }) => {
      let { city } = data;
      if (!city && data.time_zone) {
        const parts = data.time_zone.split('/');
        if (parts.length === 2) {
          city = parts[1];
        }
      }

      if (!city) {
        return null
      }

      return _.merge({}, data, { city });
    });
}

export function assertHealth() {
  return axios.get(`${CONST.REACT_APP_ORDER_API_URL}/api/health`)
    .catch(() =>
      _retryHealthOnce()
        .catch(() => _retryHealthOnce())
    )
}

function _retryHealthOnce() {
  return BPromise.delay(3000)
    .then(() => axios.get(`${CONST.REACT_APP_ORDER_API_URL}/api/health`));
}
