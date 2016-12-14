import React from 'react';
import { connect } from 'react-redux';
import { setMapView } from '../actions';
import { Spin } from 'antd';
import { posterSizeToPixels } from '../util';
import AlvarMapLabels from './AlvarMapLabels';
import ReactMapboxGl, { ZoomControl } from '/Users/kbru/code/alvarcarto/react-mapbox-gl';
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

    return (
      <div className="AlvarMap grabbable" style={dimensions}>
        <div className="AlvarMap__container">
          <Spin spinning={state.loading}>
            <ReactMapboxGl
              ref="map"
              center={[globalState.mapCenter.lng, globalState.mapCenter.lat]}
              zoom={[globalState.mapZoom]}
              pitch={globalState.pitch}
              movingMethod="flyTo"
              movingMethodOptions={{ speed: 2 }}
              onStyleLoad={this._onStyleLoad}
              style={globalState.mapStyle}
              onMoveEnd={this._onMoveEnd}
              accessToken="pk.eyJ1IjoiYWx2YXJjYXJ0byIsImEiOiJjaXdhb2s5Y24wMDJ6Mm9vNjVvNXdqeDRvIn0.wC2GAwpt9ggrV-mGAD_E0w"
            >
            </ReactMapboxGl>
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

  _onMoveEnd(map, event) {
    const lngLat = map.getCenter().toArray();
    this.props.dispatch(setMapView({
      center: { lat: lngLat[1], lng: lngLat[0] },
      zoom: map.getZoom(),
      pitch: map.getPitch(),
      bearing: map.getBearing(),
    }));
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
