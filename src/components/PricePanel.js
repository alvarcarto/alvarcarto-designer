import Odometer from './Odometer';
import React from 'react';
import _ from 'lodash';
import { Icon, Badge, Tooltip } from 'antd';
import { calculateCartPrice } from 'alvarcarto-price-util';
import history from '../history';
import ButtonLink from './ButtonLink';
import { currencyToSymbol } from '../util';

function cutZeroDecimals(humanValue) {
  return _.trimEnd(humanValue, '0.');
}

class PricePanel extends React.Component {
  render() {
    const { cart, additionalCart, promotion, currency } = this.props.globalState;
    const combinedCart = cart.concat(additionalCart);
    const originalPrice = calculateCartPrice(combinedCart);
    const totalPrice = calculateCartPrice(combinedCart, {
      currency,
      promotion,
      ignorePromotionExpiry: true,
    });
    const itemCount = cart.length;

    return (
      <div className="PricePanel">
        <div className="PricePanel__container">
          {
            itemCount > 1
              ? <div className="PricePanel__badge">
                  <Tooltip title={`You have ${itemCount} designs in your order.`}>
                    <Badge count={itemCount} />
                  </Tooltip>
                </div>
              : null
          }

          <div className="PricePanel__values">
            {
              promotion
                ? <h5 className="PricePanel__original-price">
                  <span className="PricePanel__original-price-value">{cutZeroDecimals(originalPrice.humanValue)}</span>
                  <span className="PricePanel__price-currency PricePanel__original-price-currency">{getCurrencySymbol(totalPrice.currency)}</span>
                </h5>
                : null
            }

            <h5 className="PricePanel__price">
              <Odometer value={totalPrice.humanValue} />
              <span className="PricePanel__price-currency">{currencyToSymbol(totalPrice.currency)}</span>
              { promotion ? null : <span className="PricePanel__price-shipping">+ Free shipping</span> }
            </h5>
          </div>

          <ButtonLink onClick={this._onCheckoutClick} className="PricePanel__checkout-link">
            Checkout
            <Icon type="right" />
          </ButtonLink>
        </div>
      </div>
    );
  }

  _onCheckoutClick = () => {
    history.push('/checkout');
  };
}

export default PricePanel;
