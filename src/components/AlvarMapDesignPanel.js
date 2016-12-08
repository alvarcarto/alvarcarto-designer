import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMapView, setMapStyle } from '../actions';
import { Button, Select } from 'antd';
const { Option } = Select;
import GeoSearch from './GeoSearch';
import './AlvarMapDesignPanel.css';

const cityButtons = [
  { id: 1, text: 'Heart of Hongkong', zoom: 11, lat: 22.279579, lng: 114.173998 },
  { id: 2, text: 'New York', zoom: 10, lat: 40.732540, lng: -73.998941 },
  { id: 3, text: 'Paris', zoom: 10, lat: 48.859741, lng: 2.341565 },
  { id: 4, text: 'Mariehamn', zoom: 11, lat: 60.089695, lng: 19.933891 },
];

const AlvarMapDesignPanel = React.createClass({
  render() {
    const { globalState } = this.props;

    return (
      <div className="AlvarMapDesignPanel">
        <GeoSearch />
        <h4>.. or try our favorites</h4>

        {cityButtons.map(item =>
          <CityButton key={item.id} item={item} onClick={this._onCityButtonClick} />
        )}

        <div className="AlvarMapDesignPanel__style-container">
          <h4>Choose your style</h4>
          <Select value={globalState.mapStyle} size="large" onChange={this._onStyleChange}>
            <Option value="light">Light</Option>
            <Option value="dark">Dark</Option>
            <Option value="ugly">Ugly</Option>
          </Select>
        </div>

        <div className="AlvarMapDesignPanel__price-container">

        </div>
      </div>
    );
  },

  _onCityButtonClick(item) {
    console.log('City button clicked');
    this.props.dispatch(setMapView({
      center: { lat: item.lat, lng: item.lng },
      zoom: item.zoom
    }));
  },

  _onStyleChange(value) {
    this.props.dispatch(setMapStyle(value));
  }
});

const CityButton = React.createClass({
  render() {
    return <Button
      className="AlvarMapDesignPanel__city-button"
      type="dashed"
      onClick={this._onClick}
    >
      {this.props.item.text}
    </Button>;
  },

  _onClick() {
    this.props.onClick(this.props.item);
  }
});

export default connect(state => ({ globalState: state }))(AlvarMapDesignPanel);
