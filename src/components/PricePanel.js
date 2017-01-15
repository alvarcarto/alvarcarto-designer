import Odometer from './Odometer';
import React from 'react';
import { Icon } from 'antd';
import { setViewState } from '../actions';
import { posterSizeToPixels, createApiUrlQuery } from '../util';
import { calculatePrice, getCurrencySymbol } from '../util/price';
import './PricePanel.css';

const PricePanel = React.createClass({
  render() {
    const { globalState } = this.props;
    const price = calculatePrice(globalState.size);

    return (
      <div className="PricePanel">
        <h5 className="PricePanel__price">
          <Odometer value={price.value} />
          <span className="PricePanel__price-currency">{getCurrencySymbol(price.currency)}</span>
          <span className="PricePanel__price-shipping">+ Free worldwide shipping</span>
        </h5>

        <a onClick={this._onCheckoutClick} className="PricePanel__checkout-link noselect">
          Checkout
          <Icon type="right" />
        </a>
      </div>
    );
  },

  _onCheckoutClick() {
    this.props.dispatch(setViewState('checkout'));
  },

  _createUrl() {
    const { globalState } = this.props;
    const query = createApiUrlQuery(globalState);
    return `http://tiles.alvarcarto.com:5000/api/render${query}`;
  }
});

export default PricePanel;
