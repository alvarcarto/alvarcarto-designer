import React from 'react';
import { Spin } from 'antd';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
//import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import './index.css';

const FINLAND_CENTER = [63.744139, 24.669082];
const HELSINKI_CENTER = [60.159865, 24.942334];

const AlvarMap = React.createClass({
  getInitialState() {
    return {
      mapCenter: FINLAND_CENTER,
      zoom: 4,
      loading: true,
    };
  },

  componentDidMount() {
    setTimeout(
      () => this.setState(() => ({ loading: false })),
      200
    );
    setTimeout(() => this._flyTo(HELSINKI_CENTER, 11.5), 1000);
    //setTimeout(() => this._flyTo(HELSINKI_CENTER, 10), 1000);
  },

  render() {
    const { state, props } = this;

    return (
      <div className="AlvarMap" style={{width: props.width, height: props.height}}>
        <div className="AlvarMap__container">
          <Spin spinning={state.loading}>
            { /*
            <ReactMapboxGl
              center={state.mapCenter}
              zoom={[state.zoom]}
              onStyleLoad={this._onStyleLoad}
              style="mapbox://styles/alvarcarto/ciwaqieka00622qpmqgjen1rd"
              accessToken="pk.eyJ1IjoiYWx2YXJjYXJ0byIsImEiOiJjaXdhb2s5Y24wMDJ6Mm9vNjVvNXdqeDRvIn0.wC2GAwpt9ggrV-mGAD_E0w"
            />
            */
            }
            <LeafletMap
              animate
              useFlyTo
              center={state.mapCenter}
              zoom={state.zoom}
            >
              <TileLayer
                detectRetina
                url='http://tiles.alvarcarto.com:8080/{z}/{x}/{y}.png'
              />
            </LeafletMap>
          </Spin>
        </div>
      </div>
    );
  },

  _onStyleLoad() {


  },

  _flyTo(pos, zoom) {
    this.setState(() => ({
      mapCenter: pos,
      zoom: zoom,
    }));
  }
});

export default AlvarMap;
