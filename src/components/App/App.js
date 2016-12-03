import React, { Component } from 'react';
import { Row, Col } from 'antd';
import LightWall from '../LightWall/LightWall';

import './App.css';

const App = React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App__layout">
          <div className="App__column App__column-8" span={8}>
              <h2>Menu</h2>
          </div>
          <div className="App__column App__column-16" span={16}>
            <LightWall />
          </div>
        </div>
      </div>
    );
  }
});

export default App;
