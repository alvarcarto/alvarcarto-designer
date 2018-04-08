import React from 'react';
import ImageLoader from 'react-imageloader';
import { Icon } from 'antd';
import { getStyle, createPosterThumbnailUrl } from '../util';
import { calculateCartPrice, calculateItemPrice, getCurrencySymbol, getItemLabel } from 'alvarcarto-price-util';
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

    // TODO: This logic was made to support gift cards as items. It's now broken
    // Adding priority production feature broke this as we have separated items to map items
    // and other. Instead we should have normal items (maps, gifts) and additional items (delivery etc)
    const shouldRenderSimple = _.find(cart, item => item.type !== 'mapPoster') !== undefined;

    let className = 'FinalOrderSummary';
    if (shouldRenderSimple) {
      className += ' FinalOrderSummary--simple';
    }


    // XXX: Does not work with gift cards! We have separated items to map items and other.
    // Instead we should have normal items (maps, gifts) and additional items (delivery etc)
    const mapCart = _.filter(cart, item => !item.type || item.type === 'mapPoster');
    const otherCart = _.filter(cart, item => item.type && item.type !== 'mapPoster');
    const mapCartOriginalPrice = calculateCartPrice(mapCart);

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
            _.map(mapCart, (item, index) =>
              <li key={index}>
                <OrderItem index={index} item={item} />
              </li>
            )
          }
        </ul>

        <div className="FinalOrderSummary__price-summary">
          <table className="FinalOrderSummary__price-table">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>{mapCartOriginalPrice.label}</td>
              </tr>
              {this._renderDiscountRow(totalPrice, promotion)}

              {
                _.map(otherCart, (item, index) =>
                  <tr key={index}>
                    <td>{getItemLabel(item)}</td>
                    <td>{calculateItemPrice(item).label}</td>
                  </tr>
                )
              }

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
        <h3 className="SimpleOrderItem__title">{getItemLabel(item)}</h3>
        <h4 className="SimpleOrderItem__price">{item.quantity}x {price.label}</h4>
      </div>
    );
  },
});

export default FinalOrderSummary;
