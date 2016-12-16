import React from 'react';
import _ from 'lodash';
import { setMapView, setMapStyle, setPosterLayout, setMapLabels } from '../actions';
import { coordToPrettyText, getStyles } from '../util';
import { Select, Radio } from 'antd';
const { Option } = Select;
import geodist from 'geodist';
import GeoSearch from './GeoSearch';
import CityButtonList from './CityButtonList';
import PosterSizeSelect from './PosterSizeSelect';
import PosterLabelInputs from './PosterLabelInputs';
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
            {
              _.map(getStyles(), style => {
                return <Option key={style.id} value={style.id}>{style.name}</Option>;
              })
            }
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
          <PosterSizeSelect value={globalState.size} onChange={this._onSizeChange} />
        </div>

        <div className="AlvarMapDesignPanel__group">
          <PosterLabelInputs dispatch={this.props.dispatch} labels={{
            header: globalState.labelHeader,
            smallHeader: globalState.labelSmallHeader,
            text: globalState.labelText,
          }} />
        </div>
      </div>
    );
  },

  _onGeoSearch(result) {
    const zoom = boundsToZoom(result.geometry.bounds);
    const lat = result.geometry.location.lat;
    const lng = result.geometry.location.lng;

    this.props.dispatch(setMapView({
      center: {
        lat: lat,
        lng: lng,
      },
      zoom: zoom,
    }));

    this.props.dispatch(setMapLabels({
      header: result.city,
      smallHeader: result.country,
      text: coordToPrettyText({ lat, lng }),
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
