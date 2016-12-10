import React from 'react';
import { connect } from 'react-redux';
import AlvarMap from './AlvarMap';
import { posterSizeToPhysicalDimensions } from '../util';
import './LightWall.css';

const LightWall = React.createClass({
  render() {
    const { globalState } = this.props;
    const dimensions = posterSizeToPhysicalDimensions(
      globalState.size,
      globalState.orientation
    );

    return (
      <div className="LightWall">
        <div className="LightWall__map-container">
          <div className="LightWall__wire-container">
            <div className="LightWall__wire1"></div>
            <div className="LightWall__wire2"></div>
          </div>

          <AlvarMap />

          <div className="LightWall__width-label">
            <p>{dimensions.width} {dimensions.unit}</p>
          </div>

          <div className="LightWall__height-label">
            <p>{dimensions.height} {dimensions.unit}</p>
          </div>
        </div>

        <div className="LightWall__credits">
          <p>
            <span className="LightWall__credits-heart">♥</span> Map data by <a href="http://www.openstreetmap.org/">OpenStreetMaps contributors</a>︎
          </p>
        </div>
      </div>
    );
  }
});

export default connect(state => ({ globalState: state }))(LightWall);
