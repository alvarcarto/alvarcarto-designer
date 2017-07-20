import BPromise from 'bluebird';
import debouncePromise from 'debounce-promise';
import _ from 'lodash';
import React from 'react';
import Select from 'react-select';
import { Icon } from 'antd';
import { getPlacePredictions, resolvePlaceId } from '../util/google';

const GeoSearch = React.createClass({
  getInitialState() {
    return {
      selection: null,
      debouncedFetchOptions: debouncePromise(this._fetchOptions, 50),
    };
  },

  componentDidMount() {
    const service = new window.google.maps.places.PlacesService(this.refs.div);
    // We don't want a re-render from this
    // eslint-disable-next-line
    this.state.service = service;
  },

  render() {
    return (
      <div className="GeoSearch">
        <div className="GeoSearch__container">
          <Select.Async
            className="AlvarMapDesignPanel__search"
            placeholder="Enter any city or country"
            loadOptions={this.state.debouncedFetchOptions}
            value={_.get(this, 'state.selection.value')}
            onChange={this._onChange}
          />
          <Icon type="search" />
        </div>
        <div ref="div"></div>
      </div>
    );
  },

  _onChange(item) {
    this.setState(() => ({ selection: item }));

    if (!_.isEmpty(item) &&_.isFunction(this.props.onChange)) {
      resolvePlaceId(this.state.service, item.value)
        .then(obj => {
          this.props.onChange(googleObjectToResult(obj));
        })
        .catch(err => {
          throw err;
        });
    }
  },

  _fetchOptions(input) {
    if (!input) {
      return BPromise.resolve({ options: [] });
    }

    if (_.isFunction(this.props.onInputChange)) {
      this.props.onInputChange(input);
    }

    return getPlacePredictions({
      input: input,
      types: ['(regions)'],
      language: 'en',
    })
      .then(results => ({
        options: _.take(_.map(results, result => ({
          value: String(result.place_id),
          label: result.description,
        })), 4)
      }))
      .catch(err => {
        throw err;
      });
  }
});

function googleObjectToResult(obj) {
  const northeast = obj.geometry.viewport.getNorthEast();
  const southwest = obj.geometry.viewport.getSouthWest();

  return {
    formattedAddress: obj.formatted_address,
    city: findCityFromGoogleObject(obj),
    country: findCountryFromGoogleObject(obj),
    geometry: {
      bounds: {
        northeast: {
          lat: northeast.lat(),
          lng: northeast.lng(),
        },
        southwest: {
          lat: southwest.lat(),
          lng: southwest.lng(),
        },
      },
      location: {
        lat: obj.geometry.location.lat(),
        lng: obj.geometry.location.lng(),
      },
    },
  };
}

function findCityFromGoogleObject(obj) {
  let found = findAddressComponent(obj, 'locality');

  if (!found) {
    // If locality type is not found, try to iterate through all different
    // administrative_area_level_x starting from the largest number, which is
    // the most precise(smallest) area. This may end up with having e.g. state
    // name as the City but that is OK compromise.
    for (let i = 5; i >= 1; --i) {
      const levelFound = findAddressComponent(obj, `administrative_area_level_${i}`);

      if (levelFound) {
        found = levelFound;
        break;
      }
    }
  }

  return _.get(found, 'long_name', 'UNKNOWN CITY');
}

function findCountryFromGoogleObject(obj) {
  const found = findAddressComponent(obj, 'country');
  return _.get(found, 'long_name', 'UNKNOWN COUNTRY');
}

function findAddressComponent(searchResult, type) {
  return _.find(searchResult.address_components, component => {
    return _.includes(component.types, type);
  });
}

export default GeoSearch;