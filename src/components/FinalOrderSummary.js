import React from 'react';
import ImageLoader from 'react-imageloader';
import { Icon } from 'antd';
import { getStyle, createPosterThumbnailUrl, getCartLineName } from '../util';
import { calculateCartPrice, calculateItemPrice, getCurrencySymbol } from 'alvarcarto-price-util';
import _ from 'lodash';

function preloader() {
  return <Icon type="loading" />;
}

const FinalOrderSummary = React.createClass({
  render() {
    const { cart, promotion } = this.props;
    const totalPrice = calculateCartPrice(cart, {
      promotion,
      ignorePromotionExpiry: true,
    });
    const originalPrice = calculateCartPrice(cart);
    const shouldRenderSimple = _.find(cart, item => _.isString(item.type)) !== undefined;

    let className = 'FinalOrderSummary';
    if (shouldRenderSimple) {
      className += ' FinalOrderSummary--simple';
    }

    return (
      <div className={className}>

        <div className="FinalOrderSummary__header-row">
          <h2 className="FinalOrderSummary__header">Order summary</h2>
          {
            this.props.orderId
              ? <h2 className="FinalOrderSummary__header">ID: <span className="no-wrap">#{this.props.orderId}</span></h2>
              : null
          }
        </div>

        <ul className="FinalOrderSummary__cart">
          {
            _.map(cart, (item, index) =>
              <li key={index}>
                {
                  shouldRenderSimple
                    ? <SimpleOrderItem index={index} item={item} />
                    : <OrderItem index={index} item={item} />
                }
              </li>
            )
          }
        </ul>

        <div className="FinalOrderSummary__price-summary">
          <table className="FinalOrderSummary__price-table">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>{originalPrice.label}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>0.00 €</td>
              </tr>
              {this._renderDiscountRow(totalPrice, promotion)}
              <tr className="FinalOrderSummary__total-row">
                <td>Total</td>
                <td>{totalPrice.label}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  },

  _renderDiscountRow(totalPrice, promotion) {
    if (!totalPrice.discount) {
      return null;
    }

    const discountCurrencySymbol = getCurrencySymbol(totalPrice.discount.currency);
    const discountHumanValue = (-totalPrice.discount.value / 100).toFixed(2);
    const discountPriceLabel = `${discountHumanValue} ${discountCurrencySymbol}`;

    return <tr>
      <td>{promotion.label}</td>
      <td>{discountPriceLabel}</td>
    </tr>;
  },
});

const OrderItem = React.createClass({
  render() {
    const { props } = this;
    const item = props.item;
    const price = calculateItemPrice(this.props.item);
    const styleName = getStyle(item.mapStyle).name;
    let cartImageClassName = 'OrderItem__image';
    if (item.orientation === 'landscape') {
      cartImageClassName += ' OrderItem__image--landscape';
    }

    return (
      <div className="OrderItem">
        <ImageLoader
          className={cartImageClassName}
          src={createPosterThumbnailUrl(item)}
          preloader={preloader}
        >
          <Icon type="frown-o" />
        </ImageLoader>

        <div className="OrderItem__content">
          <h3 className="OrderItem__title">{item.labelHeader}</h3>
          <h4 className="OrderItem__type">{styleName}, {item.size}</h4>
          <h4 className="OrderItem__price">{price.label}</h4>
          <div className="OrderItem__quantity">
            <span className="OrderItem__quantity-number">{item.quantity}x</span>
          </div>
        </div>
      </div>
    );
  },
});

const SimpleOrderItem = React.createClass({
  render() {
    const { props } = this;
    const item = props.item;
    const price = calculateItemPrice(this.props.item);

    return (
      <div className="SimpleOrderItem">
        <h3 className="SimpleOrderItem__title">{getCartLineName(item)}</h3>
        <h4 className="SimpleOrderItem__price">{price.label}</h4>
      </div>
    );
  },
});

export default FinalOrderSummary;
