const request = require('request-promise');

const API_KEY = 'AIzaSyA1q00KzaNyQJlxAJ1WcrJB6sIdLxTP_ws';
const BASE_URL = 'https://maps.googleapis.com/maps/api';

function geocode(query) {
  return request({
    url: BASE_URL + '/geocode/json',
    qs: {
      address: query,
      key: API_KEY,
    },
    json: true,
    withCredentials: false,
  });
};

module.exports = {
  geocode,
};