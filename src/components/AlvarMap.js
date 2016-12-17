import React from 'react';
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
import ReactMapboxGl, { GlZoomControl } from '/Users/kbru/code/alvarcarto/react-mapbox-gl';
import './AlvarMap.css';

const HELSINKI_CENTER = { lat: 60.159865, lng: 24.942334 };

const AlvarMap = React.createClass({
  getInitialState() {
    return {
      initialFlyDone: false,
      loading: true,
      map: null,
    };
  },

  componentWillReceiveProps(nextProps) {
    if (!this.state.map) {
      return;
    }

    const { globalState } = this.props;
    const nextGlobalState = nextProps.globalState;

    if (globalState.size !== nextGlobalState.size ||
        globalState.orientation !== nextGlobalState.orientation) {
      setTimeout(() => this.state.map.resize(), 400);
    }
  },

  render() {
    const { state, props } = this;
    const { globalState } = props;

    const dimensions = posterSizeToPixels(globalState.size, globalState.orientation);
    const style = getStyle(globalState.mapStyle);
    console.log(globalState.mapStyle)
    console.log('style', style)
    return (
      <div className="AlvarMap grabbable" style={dimensions}>
        <div className="AlvarMap__container">
          <Spin spinning={state.loading}>
            {
              style.type === 'vector'
                ? this._renderMapboxGl(style)
                : this._renderLeaflet(style)
            }

          </Spin>

          <AlvarMapLabels labels={{
            header: globalState.labelHeader,
            smallHeader: globalState.labelSmallHeader,
            text: globalState.labelText,
          }}/>
        </div>
      </div>
    );
  },

  _renderMapboxGl(style) {
    const { globalState } = this.props;
    return <ReactMapboxGl
      ref="map"
      center={[globalState.mapCenter.lng, globalState.mapCenter.lat]}
      zoom={[globalState.mapZoom]}
      pitch={globalState.pitch}
      movingMethod="flyTo"
      movingMethodOptions={{ speed: 2 }}
      onStyleLoad={this._onStyleLoad}
      style={style.url}
      onMoveEnd={this._onGlMoveEnd}
      accessToken="pk.eyJ1IjoiYWx2YXJjYXJ0byIsImEiOiJjaXdhb2s5Y24wMDJ6Mm9vNjVvNXdqeDRvIn0.wC2GAwpt9ggrV-mGAD_E0w"
    >
    </ReactMapboxGl>;
  },

  _renderLeaflet(style) {
    const { globalState } = this.props;
    return <LeafletMap
      animate
      useFlyTo
      zoomControl={false}
      onMoveEnd={this._onLeafletMoveEnd}
      center={globalState.mapCenter}
      zoom={globalState.mapZoom}
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

  _onLeafletMoveEnd(map, event) {
    console.log('move end leaflet', map, event);
  },

  _onStyleLoad(map) {
    if (!this.state.initialFlyDone) {
      setTimeout(
        () => this.setState(() => ({ loading: false })),
        200
      );
      setTimeout(() => this._flyTo(HELSINKI_CENTER, 10), 1000);

      this.setState({
        map: map,
        initialFlyDone: true,
      });
    }
  },

  _flyTo(center, zoom) {
    this.props.dispatch(setMapView({
      center: center,
      zoom: zoom,
    }));
  }
});

export default connect(state => ({ globalState: state }))(AlvarMap);
