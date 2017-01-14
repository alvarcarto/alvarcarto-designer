import Odometer from './Odometer';
import React from 'react';
import { Icon } from 'antd';
import { posterSizeToPixels, createApiUrlQuery } from '../util';
import { calculatePrice } from '../util/price';
import './PricePanel.css';

// TODO: Use currency lib
const symbols = {
  EUR: '\u20AC',
};

const PricePanel = React.createClass({
  render() {
    const { globalState } = this.props;
    const price = calculatePrice(globalState.size);
    return (
      <div className="PricePanel" target="_blank" href={this._createUrl()}>
        <h5 className="PricePanel__price">
          <Odometer value={price.value} />
          <span className="PricePanel__price-currency">{symbols[price.currency]}</span>
        </h5>
        <p className="PricePanel__link">
          Checkout
          <Icon type="right" />
        </p>
      </div>
    );
  },

  _createUrl() {
    const { globalState } = this.props;
    const query = createApiUrlQuery(globalState);
    return `http://tiles.alvarcarto.com:5000/api/render${query}`;
  }
});

export default PricePanel;
