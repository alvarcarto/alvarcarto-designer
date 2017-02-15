import React from 'react';
import _ from 'lodash';
import { setMapView, setMapStyle, setPosterLayout, setMapLabels } from '../actions';
import { coordToPrettyText, getStyles } from '../util';
import { Select, Radio, Button, Icon } from 'antd';
const { Option } = Select;
import Accordion from './Accordion';
import geodist from 'geodist';
import GeoSearch from './GeoSearch';
import CityButtonList from './CityButtonList';
import PosterSizeSelect from './PosterSizeSelect';
import OrientationSelect from './OrientationSelect';
import PosterLabelInputs from './PosterLabelInputs';
import MapStyleSelect from './MapStyleSelect';
import Alert from './Alert';

const AlvarMapDesignPanel = React.createClass({
  render() {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];

    return (
      <div className={`AlvarMapDesignPanel ${this.props.className}`}>
        <Accordion selected={0}>
          <Accordion.Section header="Location & style">

            <div className="ant-row ant-form-item">
              <div className="ant-col-5 ant-form-item-label">
                <label>Location</label>
              </div>
              <div className="ant-col-19">
                <GeoSearch onChange={this._onGeoSearch} />
              </div>
            </div>

            <div className="AlvarMapDesignPanel__group">
              <MapStyleSelect
                selected={mapItem.mapStyle}
                onChange={this._onStyleChange}
              />
            </div>
          </Accordion.Section>

          <Accordion.Section header="Labels">
            <div className="AlvarMapDesignPanel__group">
              <PosterLabelInputs dispatch={this.props.dispatch} labels={{
                enabled: mapItem.labelsEnabled,
                header: mapItem.labelHeader,
                smallHeader: mapItem.labelSmallHeader,
                text: mapItem.labelText,
              }} />
            </div>
          </Accordion.Section>

          <Accordion.Section header="Layout & size">
            <div className="AlvarMapDesignPanel__group">
              <h4>Orientation</h4>
              <OrientationSelect selected={mapItem.orientation} onChange={this._onOrientationChange} />
            </div>

            <div className="AlvarMapDesignPanel__group">
              <h4>Size</h4>
              <PosterSizeSelect
                orientation={mapItem.orientation}
                selected={mapItem.size}
                onChange={this._onSizeChange}
              />
            </div>
            <div className="AlvarMapDesignPanel__info">
              <Alert>
                <Icon type="picture" />
                <p>Our posters fit to standard frames which you can find anywhere.</p>
              </Alert>
            </div>
          </Accordion.Section>
        </Accordion>

        {/*
        <div className="AlvarMapDesignPanel__recommend">
          <h3>Try one of our picks</h3>
          <CityButtonList onButtonClick={this._onCityButtonClick} />
        </div>
        */}
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

    this.props.dispatch(setMapLabels({
      header: item.header,
      smallHeader: item.smallHeader,
      text: coordToPrettyText({ lat: item.lat, lng: item.lng }),
    }));
  },

  _onStyleChange(value) {
    this.props.dispatch(setMapStyle(value));
  },

  _onOrientationChange(value) {
    this.props.dispatch(setPosterLayout({
      orientation: value,
    }));
  },

  _onSizeChange(value) {
    this.props.dispatch(setPosterLayout({
      size: value,
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
