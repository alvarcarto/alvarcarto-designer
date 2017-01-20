import React from 'react';
import _ from 'lodash';
import CartItemSummary from './CartItemSummary';
import './CheckoutSummary.css';

const CheckoutSummary = React.createClass({
  render() {
    return (
      <div className="CheckoutSummary">
        <h3 className="CheckoutSummary__header">Order summary</h3>

        <ul className="CheckoutSummary__cart">
          <li>
            <CartItemSummary globalState={this.props.globalState} />
          </li>
        </ul>

        <div className="CheckoutSummary__price-summary">
          <table className="CheckoutSummary__price-table">
            <tr>
              <td>Subtotal</td>
              <td>45.00 €</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>0.00 €</td>
            </tr>
            <tr className="CheckoutSummary__total-row">
              <td>Total</td>
              <td>45.00 €</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
});

export default CheckoutSummary;
