import React from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';

import './Map.css';

const position = [51.505, -0.09];

const Map = React.createClass({
  render() {
    const props = this.props;

    return (
      <div className="Map" style={{width: props.width, height: props.height}}>
        <LeafletMap center={position} zoom={13}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </LeafletMap>
      </div>
    );
  }
});

export default Map;
