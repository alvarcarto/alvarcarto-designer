import BPromise from 'bluebird';
const geocoder = new window.google.maps.Geocoder();

function geocode(query) {
  return new BPromise((resolve, reject) => {
    // https://developers.google.com/maps/documentation/javascript/geocoding
    geocoder.geocode({ address: query }, function(results, status) {
      if (status === 'OK' || status === 'ZERO_RESULTS') {
        resolve(results);
      } else {
        console.error(results);
        reject(new Error(`Google geocode failed: ${status}`));
      }
    });
  });
};

module.exports = {
  geocode,
};