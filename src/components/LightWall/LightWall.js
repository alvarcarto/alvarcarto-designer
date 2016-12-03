import React from 'react';
import Map from '../Map/Map';
import './LightWall.css';

const LightWall = React.createClass({
  render() {
    return (
      <div className="LightWall">
        <Map width={400} height={640} />
      </div>
    );
  }
});

export default LightWall;
