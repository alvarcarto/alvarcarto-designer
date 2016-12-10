import React from 'react';
import { connect } from 'react-redux';
import { setMapView } from '../actions';
import { Spin } from 'antd';
import ReactMapboxGl, { ZoomControl } from '/Users/kbru/code/alvarcarto/react-mapbox-gl';
import './AlvarMap.css';

const mapStyles = {
  light: 'mapbox://styles/mapbox/light-v9',
  dark: 'mapbox://styles/mapbox/dark-v9',
  ugly: 'http://tiles.alvarcarto.com:8000/styles/basic-v9.json',
};
const HELSINKI_CENTER = { lat: 60.159865, lng: 24.942334 };

const AlvarMap = React.createClass({
  getInitialState() {
    return {
      pitch: 0,
      initialFlyDone: false,
      loading: true,
    };
  },

  render() {
    const { state, props } = this;
    const { globalState } = props;

    const styleUrl = mapStyles[globalState.mapStyle]
      ? mapStyles[globalState.mapStyle]
      : globalState.mapStyle;

    return (
      <div className="AlvarMap" style={{width: props.width, height: props.height}}>
        <div className="AlvarMap__container">
          <Spin spinning={state.loading}>
            <ReactMapboxGl
              center={[globalState.mapCenter.lng, globalState.mapCenter.lat]}
              zoom={[globalState.mapZoom]}
              pitch={state.pitch}
              movingMethod="flyTo"
              movingMethodOptions={{ speed: 2 }}
              onStyleLoad={this._onStyleLoad}
              style={styleUrl}
              accessToken="pk.eyJ1IjoiYWx2YXJjYXJ0byIsImEiOiJjaXdhb2s5Y24wMDJ6Mm9vNjVvNXdqeDRvIn0.wC2GAwpt9ggrV-mGAD_E0w"
            >
              <ZoomControl
                zoomDiff={1}
                onControlClick={this._onControlClick}
              />
            </ReactMapboxGl>
          </Spin>
        </div>
      </div>
    );
  },

  _onControlClick(map, zoomDiff) {
    const zoom = map.getZoom() + zoomDiff;
    this.props.dispatch(setMapView({ zoom : zoom }));
  },

  _onStyleLoad() {
    if (!this.state.initialFlyDone) {
      setTimeout(
        () => this.setState(() => ({ loading: false })),
        200
      );
      setTimeout(() => this._flyTo(HELSINKI_CENTER, 10), 1000);
      this.setState({ initialFlyDone: true });
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
