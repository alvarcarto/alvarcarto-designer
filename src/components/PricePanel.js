import React, { Component } from 'react';
import { Icon } from 'antd';
import './PricePanel.css';

const PricePanel = React.createClass({
  render() {
    return (
      <div className="PricePanel">
        <h5 className="PricePanel__price">45€</h5>
        <a className="PricePanel__link" href="#">
          Checkout
          <Icon type="right" />
        </a>
      </div>
    );
  }
});

export default PricePanel;
