import React from 'react';
import _ from 'lodash';
import { Icon, Badge, Tooltip } from 'antd';
import Odometer from './Odometer';
import { calculateCartPrice } from 'alvarcarto-price-util';
import currencyFormatter from 'currency-formatter';
import history from '../history';
import ButtonLink from './ButtonLink';
import { currencyToSymbol } from '../util';

class PricePanel extends React.Component {
  render() {
    const { cart, additionalCart, promotion, currency } = this.props.globalState;
    const combinedCart = cart.concat(additionalCart);
    const originalPrice = calculateCartPrice(combinedCart, { currency });
    const totalPrice = calculateCartPrice(combinedCart, {
      currency,
      promotion,
      ignorePromotionExpiry: true,
    });
    const itemCount = cart.length;

    const currencyOpts = currencyFormatter.findCurrency(currency);
    const decimalFormat = _.repeat('d', currencyOpts.decimalDigits);
    const odometerFormat = `(${currencyOpts.thousandsSeparator}ddd)${currencyOpts.decimalSeparator}${decimalFormat}`;

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
                  <span className="PricePanel__original-price-value">{originalPrice.label}</span>
                </h5>
                : null
            }

            <h5 className="PricePanel__price">
              {
                currencyOpts.symbolOnLeft
                  ? <span className="PricePanel__price-currency-left">{currencyToSymbol(totalPrice.currency)}</span>
                  : null
              }
              <Odometer value={Number(totalPrice.humanValue)} format={odometerFormat} />
              {
                currencyOpts.symbolOnLeft
                  ? null
                  : <span className="PricePanel__price-currency-right">{currencyToSymbol(totalPrice.currency)}</span>
              }
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
