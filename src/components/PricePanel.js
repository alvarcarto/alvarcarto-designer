import Odometer from './Odometer';
import React from 'react';
import _ from 'lodash';
import { Icon, Badge, Tooltip } from 'antd';
import { posterSizeToPixels } from '../util';
import { calculatePrice, getCurrencySymbol } from '../util/price';
import history from '../history';

const PricePanel = React.createClass({
  render() {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];
    const price = calculatePrice(mapItem, { onlyUnitPrice: true });
    const itemCount = _.reduce(globalState.cart, (memo, item) => memo + item.quantity, 0);

    return (
      <div className="PricePanel">
        <h5 className="PricePanel__price">
          <Odometer value={price.value} />
          <span className="PricePanel__price-currency">{getCurrencySymbol(price.currency)}</span>
          <span className="PricePanel__price-shipping">+ Free shipping</span>
        </h5>

        <a onClick={this._onCheckoutClick} className="PricePanel__checkout-link">
          Checkout
          <Icon type="right" />
        </a>

        {
          itemCount > 1
            ? <div className="PricePanel__badge">
                <Tooltip title={`You have ${itemCount} posters in your order.`}>
                  <Badge count={itemCount} />
                </Tooltip>
              </div>
            : null
        }
      </div>
    );
  },

  _onCheckoutClick() {
    history.push('/checkout');
  }
});

export default PricePanel;
