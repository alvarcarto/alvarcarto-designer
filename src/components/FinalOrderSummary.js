import React from 'react';
import ImageLoader from 'react-imageloader';
import { Icon } from 'antd';
import { createPosterThumbnailUrl, filterMapPosterCart, filterOtherItemsCart } from '../util';
import { calculateCartPrice, calculateItemPrice, getProduct } from 'alvarcarto-price-util';
import _ from 'lodash';
import { cartItemToMapItem } from '../util/cart-state';

function preloader() {
  return <Icon type="loading" />;
}

class FinalOrderSummary extends React.Component {
  render() {
    const { cart, promotion, currency } = this.props;
    const totalPrice = calculateCartPrice(cart, {
      currency,
      promotion,
      ignorePromotionExpiry: true,
    });

    let className = 'FinalOrderSummary';

    // XXX: Does not work with gift cards! We have separated items to map items and other.
    // Instead we should have normal items (maps, gifts) and additional items (delivery etc)
    const mapCart = filterMapPosterCart(cart);
    const otherCart = filterOtherItemsCart(cart);

    const mapCartOriginalPrice = calculateCartPrice(mapCart, { currency });

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
                <OrderItem index={index} item={item} currency={currency} />
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
                    <td>{getProduct(item.sku).name}</td>
                    <td>{calculateItemPrice(item, { currency }).label}</td>
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
  }

  _renderDiscountRow = (totalPrice, promotion) => {
    if (!totalPrice.discount) {
      return null;
    }

    return <tr>
      <td>{promotion.label}</td>
      <td>-{totalPrice.discount.label}</td>
    </tr>;
  };
}

class OrderItem extends React.Component {
  render() {
    const { props } = this;
    const { item, currency } = props;
    const mapItem = cartItemToMapItem(item);
    const price = calculateItemPrice(this.props.item, { currency });
    let cartImageClassName = 'OrderItem__image';
    if (mapItem.orientation === 'landscape') {
      cartImageClassName += ' OrderItem__image--landscape';
    }

    const materialWord = mapItem.material === 'plywood' ? 'Plywood' : 'Print'

    return (
      <div className="OrderItem">
        <ImageLoader
          className={cartImageClassName}
          src={createPosterThumbnailUrl(mapItem)}
          preloader={preloader}
        >
          <Icon type="frown-o" />
        </ImageLoader>

        <div className="OrderItem__content">
          <h3 className="OrderItem__title">{mapItem.labelHeader}</h3>
          <h4 className="OrderItem__type">{materialWord}, {mapItem.size}</h4>
          <h4 className="OrderItem__price">{price.label}</h4>
          <div className="OrderItem__quantity">
            <span className="OrderItem__quantity-number">{item.quantity}x</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FinalOrderSummary;
