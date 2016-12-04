import React, { Component } from 'react';
import { Row, Col } from 'antd';
import LightWall from '../LightWall';
import SidePanel from '../SidePanel';
import './index.css';

const App = React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App__layout">
          <SidePanel />
          <LightWall />
        </div>
      </div>
    );
  }
});

export default App;
