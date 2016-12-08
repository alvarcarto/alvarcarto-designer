import React, { Component } from 'react';
import { Input } from 'antd';
import { geocode } from '../util/google';
import './GeoSearch.css';

const GeoSearch = React.createClass({
  render() {
    return (
      <div className="GeoSearch">
        <Input.Search
          size="large"
          className="AlvarMapDesignPanel__search"
          placeholder="Search for a city"
          onChange={this._onChange}
          onSearch={this._onSearch}
        />
      </div>
    );
  },

  _onSearch(value) {
    console.log(value);
    geocode(value)
      .then(res => console.log(res))
  },

  _onChange(value) {
    console.log('change:', value);
  }
});

export default GeoSearch;
