import React from 'react';
import { setMapView, setMapStyle, setPosterLayout } from '../actions';
import { Select, Radio } from 'antd';
const { Option } = Select;
import geodist from 'geodist';
import GeoSearch from './GeoSearch';
import CityButtonList from './CityButtonList';
import './AlvarMapDesignPanel.css';

const AlvarMapDesignPanel = React.createClass({
  render() {
    const { globalState } = this.props;

    return (
      <div className="AlvarMapDesignPanel">
        <GeoSearch onChange={this._onGeoSearch} />

        <div className="AlvarMapDesignPanel__group">
          <h4>.. or try our favorites</h4>
          <CityButtonList onButtonClick={this._onCityButtonClick} />
        </div>

        <div className="AlvarMapDesignPanel__group">
          <h4>Choose your style</h4>
          <Select value={globalState.mapStyle} size="large" onChange={this._onStyleChange}>
            <Option value="mapbox://styles/mapbox/light-v9">Light</Option>
            <Option value="mapbox://styles/mapbox/dark-v9">Dark</Option>
            <Option value="http://tiles.alvarcarto.com:8000/styles/basic-v9.json">Ugly</Option>
          </Select>
        </div>

        <div className="AlvarMapDesignPanel__group">
          <h4>Orientation</h4>
          <Radio.Group onChange={this._onOrientationChange} value={globalState.orientation}>
            <Radio.Button value="portrait">Portrait</Radio.Button>
            <Radio.Button value="landscape">Landscape</Radio.Button>
          </Radio.Group>
        </div>

        <div className="AlvarMapDesignPanel__group">
          <h4>Size</h4>
          <Radio.Group onChange={this._onSizeChange} value={globalState.size}>
            <Radio.Button value="50x70cm">50cm x 70cm</Radio.Button>
            <Radio.Button value="70x100cm">70cm x 100cm</Radio.Button>
            <Radio.Button value="30x40cm">30cm x 40cm</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    );
  },

  _onGeoSearch(result) {
    const zoom = boundsToZoom(result.geometry.bounds);
    this.props.dispatch(setMapView({
      center: {
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng,
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
  },

  _onOrientationChange(e) {
    this.props.dispatch(setPosterLayout({
      orientation: e.target.value,
    }));
  },

  _onSizeChange(e) {
    this.props.dispatch(setPosterLayout({
      size: e.target.value,
    }));
  },
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

export default AlvarMapDesignPanel;
