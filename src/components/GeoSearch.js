import BPromise from 'bluebird';
import debouncePromise from 'debounce-promise';
import _ from 'lodash';
import React, { Component } from 'react';
import Select from 'react-select';
import { geocode } from '../util/google';
import './GeoSearch.css';

const GeoSearch = React.createClass({
  getInitialState() {
    return {
      selection: null,
      debouncedFetchOptions: debouncePromise(this._fetchOptions, 50),
    };
  },

  render() {
    return (
      <div className="GeoSearch">
        <Select.Async
          className="AlvarMapDesignPanel__search"
          placeholder="Search for a city"
          backspaceRemoves={false}
          loadOptions={this.state.debouncedFetchOptions}
          clearable={false}
          value={_.get(this, 'state.selection.value')}
          onChange={this._onChange}
        />
      </div>
    );
  },

  _onChange(value) {
    this.setState(() => ({ selection: value }));

    if (_.isFunction(this.props.onChange)) {
      this.props.onChange(value.meta.result);
    }
  },

  _fetchOptions(input) {
    if (!input) {
      return BPromise.resolve({ options: [] });
    }

    return geocode(input)
      .then(results => ({
        options: _.map(results, (result, i) => ({
          value: String(i),
          label: result.formatted_address,

          // Not officially supported by react select component
          meta: {
            result: result,
          },
        }))
      }));
  }
});

export default GeoSearch;
