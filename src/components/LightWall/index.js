import React from 'react';
import AlvarMap from '../AlvarMap';
import './index.css';

const LightWall = React.createClass({
  render() {
    return (
      <div className="LightWall">
        <AlvarMap width={400} height={560} />
      </div>
    );
  }
});

export default LightWall;
