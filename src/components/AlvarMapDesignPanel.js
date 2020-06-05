/* global Modernizr */

import React from 'react';
import _ from 'lodash';
import {
  setMapView,
  setMapStyle,
  setPosterStyle,
  setPosterLayout,
  setMapLabels,
  setPosterMaterial
} from '../actions';
import { coordToPrettyText, getPosterLook, getPosterLooks, getQuery } from '../util';
import { cartItemToMapItem } from '../util/cart-state';
import { getPosterSizes } from 'alvarcarto-common';
import countries from 'i18n-iso-countries';
import Accordion from './Accordion';
import TabView from './TabView';
import MediaQuery from 'react-responsive';
import GeoSearch from './GeoSearch';
import PosterSizeSelect from './PosterSizeSelect';
import OrientationSelect from './OrientationSelect';
import PosterLabelInputs from './PosterLabelInputs';
import PosterStyleSelect from './PosterStyleSelect';
import PosterMaterialSelect from './PosterMaterialSelect';
import ButtonLink from './ButtonLink';
import MapStyleSelect from './MapStyleSelect';
import { triggerGtmEvent } from '../util/gtm';
import CONST from '../constants';
import Alert from './Alert';
import cities from '../data/cities.json';

const SHOW_MATERIAL = getQuery('showMaterial', 'boolean', true);

class AlvarMapDesignPanel extends React.Component {
  render() {
    const { globalState } = this.props;

    const item = globalState.cart[globalState.editCartItem];
    return (
      <div className={`AlvarMapDesignPanel ${this.props.className}`}>
        <MediaQuery minWidth={CONST.SCREEN_MD}>
          {(matches) => {
            if (matches) {
              return this._renderWideView(item);
            } else {
              return this._renderNarrowView(item);
            }
          }}
        </MediaQuery>
      </div>
    );
  }

  _renderNarrowView = (item) => {
    return <div className="AlvarMapDesignPanel__narrow">
      <div className="AlvarMapDesignPanel__narrow-spacer"></div>
      <TabView initialSelected={null}>
        <TabView.Panel className="AlvarMapDesignPanel__location-section" header="1. Style">
          {this._renderLocationAndStylePanel(item)}
        </TabView.Panel>
        <TabView.Panel className="AlvarMapDesignPanel__size-section" header="2. Size">
          {this._renderSizePanel(item)}
        </TabView.Panel>
        <TabView.Panel header="3. Labels">
          {this._renderLabelsPanel(item)}
        </TabView.Panel>
      </TabView>
    </div>;
  };

  _renderWideView = (item) => {
    return <div className="AlvarMapDesignPanel__wide">
      <Accordion initialSelected={0}>
        <Accordion.Section className="AlvarMapDesignPanel__location-section" header="Location &amp; Style">
          {this._renderLocationAndStylePanel(item)}
        </Accordion.Section>
        <Accordion.Section className="AlvarMapDesignPanel__size-section" header="Size &amp; Layout">
          {this._renderSizePanel(item)}
        </Accordion.Section>
        <Accordion.Section header="Labels">
          {this._renderLabelsPanel(item)}
        </Accordion.Section>
      </Accordion>
    </div>;
  };

  _renderLocationAndStylePanel = (item) => {
    const mapItem = cartItemToMapItem(item);
    const posterLook = getPosterLook(mapItem.posterStyle, mapItem.material);
    const { globalState } = this.props;

    return <div className="AlvarMapDesignPanel__group">
      <div className="AlvarMapDesignPanel__group">
        <GeoSearch
          onInputChange={this._onGeoSearchInputChange}
          onChange={this._onGeoSearch}
        />
        <p className="AlvarMapDesignPanel__label">
          Or try a <ButtonLink onClick={this._onRandomCity}>random location</ButtonLink>.
          You can also zoom and drag the map to any location.
        </p>
      </div>

      {
        !SHOW_MATERIAL || !Modernizr.backgroundblendmode
          ? null
          : (
            <div className="AlvarMapDesignPanel__group AlvarMapDesignPanel__poster-material">
              <h4>Material</h4>
              <PosterMaterialSelect
                selected={mapItem.material}
                onChange={this._onPosterMaterialChange}
              />
              <p className="AlvarMapDesignPanel__label AlvarMapDesignPanel__material-info">
                {
                  mapItem.material === 'plywood'
                    ? 'Printed on a high-quality Finnish birch plywood, from only PEFC & FSC certified sustainable sources. Plywood prints are ready-to-hang straight out of the package.'
                    : 'Printed on a 180g/m² thick high-quality matt paper. Frames are not included.'
                }
              </p>
            </div>
          )
      }

      <div className="AlvarMapDesignPanel__group AlvarMapDesignPanel__poster-style">
        <h4>Print style</h4>
        <PosterStyleSelect
          defaultValue={mapItem.posterStyle}
          selected={mapItem.posterStyle}
          options={getPosterLooks(mapItem.material)}
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
  };

  _renderSizePanel = (item) => {
    const mapItem = cartItemToMapItem(item);
    return <div className="AlvarMapDesignPanel__group">
      <div className="AlvarMapDesignPanel__info">
        <Alert iconType="picture">
          Our posters fit to standard frames which you can find in nearby stores.
        </Alert>
      </div>

      <div className="AlvarMapDesignPanel__group">
        <h4>Size</h4>

        <PosterSizeSelect
          onTypeChange={this._onSizeTypeChange}
          orientation={mapItem.orientation}
          selected={mapItem.size}
          material={mapItem.material}
          options={getPosterSizes(mapItem.material)}
          onChange={this._onSizeChange}
          currency={this.props.globalState.currency}
        />
      </div>

      <div className="AlvarMapDesignPanel__group AlvarMapDesignPanel__orientation-select">
        <h4>Layout</h4>
        <OrientationSelect selected={mapItem.orientation} onChange={this._onOrientationChange} />
      </div>
    </div>;
  };

  _renderLabelsPanel = (item) => {
    const mapItem = cartItemToMapItem(item);
    const posterLook = getPosterLook(mapItem.posterStyle, mapItem.material);

    return <div className="AlvarMapDesignPanel__group">
      <PosterLabelInputs dispatch={this.props.dispatch} labels={{
        enabled: mapItem.labelsEnabled,
        showLabels: posterLook.labels,
        header: mapItem.labelHeader,
        smallHeader: mapItem.labelSmallHeader,
        autoUpdateCoordinates: item.autoUpdateCoordinates,
        text: mapItem.labelText,
      }} />
    </div>;
  };

  _onGeoSearch = (result) => {
    const lat = result.geometry.location.lat;
    const lng = result.geometry.location.lng;

    this.props.dispatch(setMapView({
      center: {
        lat: lat,
        lng: lng,
      },
      zoom: 11,
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
  };

  _onGeoSearchInputChange = (input) => {
    triggerGtmEvent({
      event: 'designPlaceSearch',
      searchText: input,
    });
  };

  _onCityButtonClick = (item) => {
    this.props.dispatch(setMapView({
      center: { lat: item.lat, lng: item.lng },
      zoom: item.zoom
    }));

    this.props.dispatch(setMapLabels({
      header: item.header,
      smallHeader: item.smallHeader,
      text: coordToPrettyText({ lat: item.lat, lng: item.lng }),
    }));
  };

  _onMapStyleChange = (value) => {
    this.props.dispatch(setMapStyle(value));
  };

  _onPosterStyleChange = (value) => {
    this.props.dispatch(setPosterStyle(value));
  };

  _onPosterMaterialChange = (value) => {
    this.props.dispatch(setPosterMaterial(value));
  };

  _onOrientationChange = (value) => {
    this.props.dispatch(setPosterLayout({
      orientation: value,
    }));
  };

  _onSizeChange = (value) => {
    this.props.dispatch(setPosterLayout({
      size: value,
    }));
  };

  _onSizeTypeChange = (value) => {
    this.props.dispatch(setPosterLayout({
      sizeType: value,
    }));
  };

  _onRandomCity = (e) => {
    e.preventDefault();

    const city = _.sample(cities);
    const [lat, lng] = city.latLng;

    this.props.dispatch(setMapView({
      center: { lat, lng },
      zoom: 11,
    }));

    this.props.dispatch(setMapLabels({
      header: city.name,
      smallHeader: countries.getName(city.country, 'en'),
    }));
  };
}

export default AlvarMapDesignPanel;
