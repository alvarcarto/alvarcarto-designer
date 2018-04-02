import Odometer from './Odometer';
import React from 'react';
import _ from 'lodash';
import { Icon, Badge, Tooltip } from 'antd';
import { calculateCartPrice, getCurrencySymbol } from 'alvarcarto-price-util';
import history from '../history';

const PricePanel = React.createClass({
  render() {
    const { cart, promotion } = this.props.globalState;
    const totalPrice = calculateCartPrice(cart, { promotion, ignorePromotionExpiry: true });

    return (
      <div className="PricePanel">
        <div className="PricePanel__container">
          <h5 className="PricePanel__price">
            <Odometer value={totalPrice.humanValue} />
            <span className="PricePanel__price-currency">{getCurrencySymbol(totalPrice.currency)}</span>
            <span className="PricePanel__price-shipping">+ Free shipping</span>
          </h5>

          <a onClick={this._onCheckoutClick} className="PricePanel__checkout-link">
            Checkout
            <Icon type="right" />
          </a>
        </div>
      </div>
    );
  },

  _onCheckoutClick() {
    history.push('/checkout');
  }
});

export default PricePanel;
