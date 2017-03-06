import React from 'react';
import { connect } from 'react-redux';
import { getStyle, createPosterThumbnailUrl } from '../util';
import { calculateTotalPrice, calculatePrice } from '../util/price';
import _ from 'lodash';

const FinalOrderSummary = React.createClass({
  render() {
    const { cart } = this.props.globalState;
    const totalPrice = calculateTotalPrice(cart);

    return (
      <div className="FinalOrderSummary">
        <h2 className="FinalOrderSummary__header">Order summary</h2>

        <ul className="FinalOrderSummary__cart">
          {
            _.map(cart, (item, index) =>
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
                <td>{totalPrice.label}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>0.00 €</td>
              </tr>
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
});

const OrderItem = React.createClass({
  render() {
    const { props } = this;
    const item = props.item;

    const price = calculatePrice(this.props.item);
    const styleName = getStyle(item.mapStyle).name;
    let cartImageClassName = 'OrderItem__image';
    if (item.orientation === 'landscape') {
      cartImageClassName += ' OrderItem__image--landscape';
    }

    return (
      <div className="OrderItem">
        <img src={createPosterThumbnailUrl(item)} className={cartImageClassName} alt="poster thumbnail" />

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

export default connect(state => ({ globalState: state }))(FinalOrderSummary);