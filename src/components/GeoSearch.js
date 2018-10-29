
import debouncePromise from 'debounce-promise';
import _ from 'lodash';
import React from 'react';
import { message } from 'antd';
import AlgoliaPlaces from 'algolia-places-react';
import config from '../config';

const GeoSearch = React.createClass({
  getInitialState() {
    return {
      debouncedFetchOptions: debouncePromise(this._fetchOptions, 50),
    };
  },

  render() {
    return (
      <div className="GeoSearch">
        <AlgoliaPlaces
          placeholder="Enter any city or country"
          options={{
            appId: config.REACT_APP_ALGOLIA_APP_ID,
            apiKey: config.REACT_APP_ALGOLIA_API_KEY,
            language: 'en',
          }}
          onChange={this._onChange}
          onLimit={this._onLimit}
          onError={this._onError}
        />
      </div>
    );
  },

  _onChange(result) {
    if (!result.suggestion) {
      return;
    }

    this.props.onChange(algoliaObjectToResult(result));
  },

  _onLimit(msg) {
    message.error('Location search quota exceeded', 3);
    console.error('Algolia limit reached', msg);
  },

  _onError(msg) {
    message.error('Error when searching a location', 3);
    console.error('Algolia error', msg);
  }
});

function algoliaObjectToResult(obj) {
  return {
    formattedAddress: obj.suggestion.value,
    city: findCityFromAlgoliaObject(obj),
    country: findCountryFromAlgoliaObject(obj),
    geometry: {
      location: {
        lat: obj.suggestion.latlng.lat,
        lng: obj.suggestion.latlng.lng,
      },
    },
  };
}

function findCityFromAlgoliaObject(obj) {
  const { suggestion } = obj;

  if (suggestion.type === 'city') {
    return suggestion.name;
  }

  if (_.has(suggestion, 'suburb')) {
    return suggestion.suburb;
  } else if (_.has(suggestion, 'city')) {
    return suggestion.city;
  }

  return suggestion.country;
}

function findCountryFromAlgoliaObject(obj) {
  return _.get(obj, 'suggestion.country', obj.query);
}

export default GeoSearch;