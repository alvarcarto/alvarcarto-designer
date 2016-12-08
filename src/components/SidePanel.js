import React, { Component } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import AlvarMapDesignPanel from './AlvarMapDesignPanel';
import PricePanel from './PricePanel';
import './SidePanel.css';

const SidePanel = React.createClass({
  render() {
    return (
      <div className="SidePanel">
        <AlvarMapDesignPanel />
        <PricePanel />
      </div>
    );
  }
});

export default SidePanel;
