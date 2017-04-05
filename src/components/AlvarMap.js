import React from 'react';
import L from 'leaflet';
window.L = L;
import { connect } from 'react-redux';
import { setMapView } from '../actions';
import CONST from '../constants';
import { posterSizeToPixels, getStyle } from '../util';
import AlvarMapOverlay from './AlvarMapOverlay';
import {
  Map as LeafletMap,
  TileLayer as LTileLayer
} from 'react-leaflet';

const AlvarMap = React.createClass({
  componentWillReceiveProps(nextProps) {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];

    const nextGlobalState = nextProps.globalState;
    const nextMapItem = nextGlobalState.cart[nextGlobalState.editCartItem];

    if (mapItem.size !== nextMapItem.size ||
        mapItem.orientation !== nextMapItem.orientation) {
      if (this.refs.lMap) {
        setTimeout(() => this.refs.lMap.leafletElement.invalidateSize(), 0);
      }
    }

    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
    const nextDimensions = posterSizeToPixels(nextMapItem.size, nextMapItem.orientation);
    if (dimensions.zoom !== nextDimensions.zoom) {
      // Ugly hack very very ugly, to fix:
      // We are using our fork of Leaflet which implements this
      // https://github.com/Leaflet/Leaflet/issues/2795
      L.DomEvent.setContainerScale(nextDimensions.zoom);
    }
  },

  componentDidMount() {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];
    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
    L.DomEvent.setContainerScale(dimensions.zoom);

    if (!mapItem.mapBounds) {
      this._dispatchBounds();
    }
  },

  render() {
    const { props } = this;
    const { globalState } = props;
    const mapItem = globalState.cart[globalState.editCartItem];

    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
    const style = getStyle(mapItem.mapStyle);
    const mapCssStyle = {
      width: dimensions.width,
      height: dimensions.height,
    };

    const minSide = Math.min(dimensions.width, dimensions.height);
    const borderPadding = Math.floor(CONST.EMPTY_MAP_PADDING_FACTOR * minSide);

    return (
      <div className="AlvarMap grabbable" style={mapCssStyle}>
        <div className="AlvarMap__container">
          {
            this._renderLeaflet(style)
          }

          {
            mapItem.labelsEnabled
              ? <AlvarMapOverlay mapItem={mapItem} />
              : <div
                  className="AlvarMap__empty-overlay"
                  style={{ border: `${borderPadding}px solid white` }}
                ></div>
          }
        </div>
      </div>
    );
  },

  _renderLeaflet(style) {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];

    return <LeafletMap
      ref="lMap"
      zoomControl={false}
      zoomDelta={0.25}
      zoomSnap={0.25}
      onMoveEnd={this._onLeafletMoveEnd}
      center={mapItem.mapCenter}
      zoom={mapItem.mapZoom}
      minZoom={8}
      maxZoom={19}
    >
      <LTileLayer url={style.url} />
    </LeafletMap>;
  },

  _onLeafletMoveEnd(event) {
    const map = this.refs.lMap.leafletElement;
    const latLng = map.getCenter();

    this.props.dispatch(setMapView({
      center: { lat: latLng.lat, lng: latLng.lng },
      bounds: this._getMapBounds(),
      zoom: map.getZoom(),
    }));
  },

  _dispatchBounds() {
    this.props.dispatch(setMapView({
      bounds: this._getMapBounds(),
    }));
  },

  _getMapBounds() {
    const map = this.refs.lMap.leafletElement;
    const bounds = map.getBounds();
    const southWest = bounds.getSouthWest();
    const northEast = bounds.getNorthEast();
    return {
      southWest: { lat: southWest.lat, lng: southWest.lng },
      northEast: { lat: northEast.lat, lng: northEast.lng },
    };
  }
});

export default connect(state => ({ globalState: state }))(AlvarMap);
