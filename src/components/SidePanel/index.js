import React, { Component } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import AlvarMapDesignPanel from '../AlvarMapDesignPanel';
import CheckoutPanel from '../CheckoutPanel';
import './index.css';

const SidePanel = React.createClass({
  render() {
    return (
      <div className="SidePanel">
        <div className="SidePanel__content">
          <Tabs className="SidePanel__tabs" defaultActiveKey="1" onChange={console.log}>
            <TabPane tab="1. Design" key="1">
              <AlvarMapDesignPanel />
            </TabPane>
            <TabPane tab="2. Labels" key="2">
              test
            </TabPane>
            <TabPane tab="3. Customize" key="3">
              test
            </TabPane>
            <TabPane tab="4. Checkout" key="4">
              <CheckoutPanel />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
});

export default SidePanel;
