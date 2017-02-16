import React from 'react';
import L from 'leaflet';
window.L = L;
import { connect } from 'react-redux';
import { setMapView } from '../actions';
import { Spin } from 'antd';
import { posterSizeToPixels, getStyle } from '../util';
import AlvarMapLabels from './AlvarMapLabels';
import {
  Map as LeafletMap,
  TileLayer as LTileLayer,
  ZoomControl as LZoomControl
} from 'react-leaflet';
import ReactMapboxGl from 'react-mapbox-gl';

const HELSINKI_CENTER = { lat: 60.159865, lng: 24.942334 };

const AlvarMap = React.createClass({
  getInitialState() {
    return {
      glMap: null,
    };
  },

  componentWillReceiveProps(nextProps) {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];

    const nextGlobalState = nextProps.globalState;
    const nextMapItem = nextGlobalState.cart[nextGlobalState.editCartItem];

    if (mapItem.size !== nextMapItem.size ||
        mapItem.orientation !== nextMapItem.orientation) {
      if (this.state.glMap) {
        setTimeout(() => this.state.glMap.resize(), 0);
      }

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
  },

  render() {
    const { state, props } = this;
    const { globalState } = props;
    const mapItem = globalState.cart[globalState.editCartItem];

    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
    const style = getStyle(mapItem.mapStyle);
    return (
      <div className="AlvarMap grabbable" style={{ width: dimensions.width, height: dimensions.height }}>
        <div className="AlvarMap__container">
          {
            style.type === 'vector'
              ? this._renderMapboxGl(style)
              : this._renderLeaflet(style)
          }

          {
            mapItem.labelsEnabled
              ? <AlvarMapLabels labels={{
                  header: mapItem.labelHeader,
                  smallHeader: mapItem.labelSmallHeader,
                  text: mapItem.labelText,
                }}/>
              : null
          }
        </div>
      </div>
    );
  },

  _renderMapboxGl(style) {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];
    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);

    return <ReactMapboxGl
      ref="map"
      center={[mapItem.mapCenter.lng, mapItem.mapCenter.lat]}
      zoom={[mapItem.mapZoom]}
      pitch={mapItem.pitch}
      movingMethod="flyTo"
      movingMethodOptions={{ speed: 2 }}
      containerScale={dimensions.zoom}
      onStyleLoad={this._onStyleLoad}
      style={style.url}
      onMoveEnd={this._onGlMoveEnd}
      accessToken="pk.eyJ1IjoiYWx2YXJjYXJ0byIsImEiOiJjaXdhb2s5Y24wMDJ6Mm9vNjVvNXdqeDRvIn0.wC2GAwpt9ggrV-mGAD_E0w"
    >
    </ReactMapboxGl>;
  },

  _renderLeaflet(style) {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];

    return <LeafletMap
      ref="lMap"
      zoomControl={false}
      onMoveEnd={this._onLeafletMoveEnd}
      center={mapItem.mapCenter}
      zoom={mapItem.mapZoom}
    >
      <LTileLayer detectRetina url={style.url} />
      <LZoomControl position="topright" />
    </LeafletMap>;
  },

  _onGlMoveEnd(map, event) {
    const lngLat = map.getCenter().toArray();
    this.props.dispatch(setMapView({
      center: { lat: lngLat[1], lng: lngLat[0] },
      zoom: map.getZoom(),
      pitch: map.getPitch(),
      bearing: map.getBearing(),
    }));
  },

  _onLeafletMoveEnd(event) {
    const map = this.refs.lMap.leafletElement;
    const latLng = map.getCenter();

    this.props.dispatch(setMapView({
      center: { lat: latLng.lat, lng: latLng.lng },
      zoom: map.getZoom()
    }));
  },

  _onStyleLoad(map) {
    this.setState({
      glMap: map,
    });
  },

  _flyTo(center, zoom) {
    this.props.dispatch(setMapView({
      center: center,
      zoom: zoom,
    }));
  }
});

export default connect(state => ({ globalState: state }))(AlvarMap);
