import BPromise from 'bluebird';

const autocomplete = new window.google.maps.places.AutocompleteService();

function getPlacePredictions(opts) {
  return new BPromise((resolve, reject) => {
    autocomplete.getPlacePredictions(opts, (results, status) => {
      if (status === 'OK' || status === 'ZERO_RESULTS') {
        resolve(results);
      } else {
        console.error(results);
        reject(new Error(`Google places search failed: ${status}`));
      }
    });
  });
}

function resolvePlaceId(service, placeId) {
  return new BPromise((resolve, reject) => {
    service.getDetails({ placeId: placeId }, (result, status) => {
      if (status === 'OK') {
        resolve(result);
      } else {
        // Zero results is also an error since place id should be
        // exact
        console.error(result);
        reject(new Error(`Google places id resolve failed: ${status}`));
      }
    });
  });
}

module.exports = {
  getPlacePredictions,
  resolvePlaceId,
};