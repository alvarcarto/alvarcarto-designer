import React from 'react';
import { connect } from 'react-redux';
import { setMapView, setMapStyle } from '../actions';
import { Button, Select } from 'antd';
import geodist from 'geodist';
const { Option } = Select;
import GeoSearch from './GeoSearch';
import CityButtonList from './CityButtonList';
import './AlvarMapDesignPanel.css';

const AlvarMapDesignPanel = React.createClass({
  render() {
    const { globalState } = this.props;

    return (
      <div className="AlvarMapDesignPanel">
        <GeoSearch onChange={this._onGeoSearch} />
        <h4>.. or try our favorites</h4>

        <CityButtonList onButtonClick={this._onCityButtonClick} />

        <div className="AlvarMapDesignPanel__style-container">
          <h4>Choose your style</h4>
          <Select value={globalState.mapStyle} size="large" onChange={this._onStyleChange}>
            <Option value="light">Light</Option>
            <Option value="dark">Dark</Option>
            <Option value="ugly">Ugly</Option>
          </Select>
        </div>
      </div>
    );
  },

  _onGeoSearch(result) {
    console.log('result', result);
    const zoom = boundsToZoom(result.geometry.bounds);
    this.props.dispatch(setMapView({
      center: {
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng(),
      },
      zoom: zoom,
    }));
  },

  _onCityButtonClick(item) {
    this.props.dispatch(setMapView({
      center: { lat: item.lat, lng: item.lng },
      zoom: item.zoom
    }));
  },

  _onStyleChange(value) {
    this.props.dispatch(setMapStyle(value));
  }
});

function boundsToZoom(bounds) {
  const point1 = bounds.northeast;
  const point2 = bounds.southwest;
  const dist = geodist(
    { lat: point1.lat, lon: point1.lng },
    { lat: point2.lat, lon: point2.lng },
    { exact: true, unit: 'km' }
  );

  if (dist < 100) {
    return 10;
  } else if (dist < 200) {
    return 8;
  } else if (dist < 300) {
    return 7;
  } else if (dist < 500) {
    return 6;
  } else if (dist < 1000) {
    return 5;
  } else if (dist < 2000) {
    return 3.5;
  } else if (dist < 3000) {
    return 3;
  } else {
    return 2;
  }
}

export default connect(state => ({ globalState: state }))(AlvarMapDesignPanel);
