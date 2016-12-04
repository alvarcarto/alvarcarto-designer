import React from 'react';
import { Spin } from 'antd';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import './index.css';

const FINLAND_CENTER = [63.744139, 24.669082];
const HELSINKI_CENTER = [60.159865, 24.942334];

const AlvarMap = React.createClass({
  getInitialState() {
    return {
      mapCenter: FINLAND_CENTER,
      zoom: 10,
      loading: true,
      theme: 'alvar',
    };
  },

  componentDidMount() {
    setTimeout(
      () => this.setState(() => ({ loading: false })),
      200
    );
    setTimeout(() => this._flyTo(HELSINKI_CENTER, 12), 1000);
    //setTimeout(() => this._flyTo(HELSINKI_CENTER, 10), 1000);
  },

  render() {
    const { state, props } = this;

    return (
      <div className="AlvarMap" style={{width: props.width, height: props.height}}>
        <div className="AlvarMap__container">
          <Spin spinning={state.loading}>
            <LeafletMap
              animate
              useFlyTo
              center={state.mapCenter}
              zoom={state.zoom}
            >
              <TileLayer
                detectRetina
                url={`http://tiles.alvarcarto.com:8080/${state.theme}/{z}/{x}/{y}/tile.png`}
              />
            </LeafletMap>
          </Spin>
        </div>
      </div>
    );
  },

  _flyTo(pos, zoom) {
    this.setState(() => ({
      mapCenter: pos,
      zoom: zoom,
    }));
  }
});

export default AlvarMap;
