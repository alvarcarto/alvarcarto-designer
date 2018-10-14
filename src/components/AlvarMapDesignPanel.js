import React from 'react';
import _ from 'lodash';
import {
  setMapView,
  setMapStyle,
  setPosterStyle,
  setPosterLayout,
  setMapLabels
} from '../actions';
import { coordToPrettyText, getPosterLook } from '../util';
import { Icon } from 'antd';
import Accordion from './Accordion';
import TabView from './TabView';
import MediaQuery from 'react-responsive';
import geodist from 'geodist';
import GeoSearch from './GeoSearch';
import PosterSizeSelect from './PosterSizeSelect';
import OrientationSelect from './OrientationSelect';
import PosterLabelInputs from './PosterLabelInputs';
import PosterStyleSelect from './PosterStyleSelect';
import MapStyleSelect from './MapStyleSelect';
import { triggerGtmEvent } from '../util/gtm';
import CONST from '../constants';
import Alert from './Alert';

const AlvarMapDesignPanel = React.createClass({
  render() {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];

    return (
      <div className={`AlvarMapDesignPanel ${this.props.className}`}>
        <MediaQuery maxWidth={CONST.SCREEN_SM}>
          {(matches) => {
            if (matches) {
              return this._renderNarrowView(mapItem);
            } else {
              return this._renderWideView(mapItem);
            }
          }}
        </MediaQuery>

        {/*
        <div className="AlvarMapDesignPanel__recommend">
          <h3>Try one of our picks</h3>
          <CityButtonList onButtonClick={this._onCityButtonClick} />
        </div>
        */}
      </div>
    );
  },

  _renderNarrowView(mapItem) {
    return <div className="AlvarMapDesignPanel__narrow">
      <div className="AlvarMapDesignPanel__narrow-spacer"></div>
      <TabView initialSelected={null}>
        <TabView.Panel className="AlvarMapDesignPanel__location-section" header="1. Style">
          {this._renderLocationAndStylePanel(mapItem)}
        </TabView.Panel>
        <TabView.Panel className="AlvarMapDesignPanel__size-section" header="2. Size">
          {this._renderSizePanel(mapItem)}
        </TabView.Panel>
        <TabView.Panel header="3. Labels">
          {this._renderLabelsPanel(mapItem)}
        </TabView.Panel>
      </TabView>
    </div>;
  },

  _renderWideView(mapItem) {
    return <div className="AlvarMapDesignPanel__wide">
      <Accordion initialSelected={0}>
        <Accordion.Section className="AlvarMapDesignPanel__location-section" header="Location &amp; Style">
          {this._renderLocationAndStylePanel(mapItem)}
        </Accordion.Section>
        <Accordion.Section className="AlvarMapDesignPanel__size-section" header="Size &amp; Layout">
          {this._renderSizePanel(mapItem)}
        </Accordion.Section>
        <Accordion.Section header="Labels">
          {this._renderLabelsPanel(mapItem)}
        </Accordion.Section>
      </Accordion>
    </div>;
  },

  _renderLocationAndStylePanel(mapItem) {
    const posterLook = getPosterLook(mapItem.posterStyle);
    const { globalState } = this.props;

    return <div className="AlvarMapDesignPanel__group">
      <div className="AlvarMapDesignPanel__group">
        <GeoSearch
          onInputChange={this._onGeoSearchInputChange}
          onChange={this._onGeoSearch}
        />
        <p className="AlvarMapDesignPanel__label">
          You can also zoom and drag the map to any location.
        </p>
      </div>

      <div className="AlvarMapDesignPanel__group AlvarMapDesignPanel__poster-style">
        <h4>Poster look</h4>
        <PosterStyleSelect
          defaultValue={mapItem.posterStyle}
          selected={mapItem.posterStyle}
          onChange={this._onPosterStyleChange}
        />
      </div>

      <div className="AlvarMapDesignPanel__group">
        <h4>Map color</h4>
        <MapStyleSelect
          debug={globalState.debug}
          showStyles={posterLook.allowedMapStyles}
          selected={mapItem.mapStyle}
          onChange={this._onMapStyleChange}
        />
      </div>
    </div>;
  },

  _renderSizePanel(mapItem) {
    return <div className="AlvarMapDesignPanel__group">
      <div className="AlvarMapDesignPanel__info">
        <Alert>
          <Icon type="picture" />
          <p>Our posters fit to standard frames which you can find anywhere.</p>
        </Alert>
      </div>

      <div className="AlvarMapDesignPanel__group">
        <h4>Size</h4>

        <PosterSizeSelect
          onTypeChange={this._onSizeTypeChange}
          orientation={mapItem.orientation}
          selected={mapItem.size}
          onChange={this._onSizeChange}
        />
      </div>

      <div className="AlvarMapDesignPanel__group AlvarMapDesignPanel__orientation-select">
        <h4>Layout</h4>
        <OrientationSelect selected={mapItem.orientation} onChange={this._onOrientationChange} />
      </div>
    </div>;
  },

  _renderLabelsPanel(mapItem) {
    const posterLook = getPosterLook(mapItem.posterStyle);

    return <div className="AlvarMapDesignPanel__group">
      <PosterLabelInputs dispatch={this.props.dispatch} labels={{
        enabled: mapItem.labelsEnabled,
        showLabels: posterLook.labels,
        header: mapItem.labelHeader,
        smallHeader: mapItem.labelSmallHeader,
        autoUpdateCoordinates: mapItem.autoUpdateCoordinates,
        text: mapItem.labelText,
      }} />
    </div>;
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

    triggerGtmEvent({
      event: 'designPlaceSearchFound',
      searchText: result.formattedAddress,
      payload: {
        userActionParameter: result.formattedAddress,
      },
    });
  },

  _onGeoSearchInputChange(input) {
    triggerGtmEvent({
      event: 'designPlaceSearch',
      searchText: input,
    });
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

  _onMapStyleChange(value) {
    this.props.dispatch(setMapStyle(value));
  },

  _onPosterStyleChange(value) {
    this.props.dispatch(setPosterStyle(value));
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

  _onSizeTypeChange(value) {
    this.props.dispatch(setPosterLayout({
      sizeType: value,
    }));
  },

  _onRandomCity(e) {
    e.preventDefault();

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
