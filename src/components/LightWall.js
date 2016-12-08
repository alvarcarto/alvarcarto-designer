import React from 'react';
import AlvarMap from './AlvarMap';
import './LightWall.css';

const LightWall = React.createClass({
  render() {
    return (
      <div className="LightWall">
        <div className="LightWall__light"></div>

        <div className="LightWall__map-container">
          <div className="LightWall__wire-container">
            <div className="LightWall__wire1"></div>
            <div className="LightWall__wire2"></div>
          </div>

          <AlvarMap width={400} height={560} />
        </div>
      </div>
    );
  }
});

export default LightWall;
