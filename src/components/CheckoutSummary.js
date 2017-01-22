import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { removeCartItem, editCartItem, addCartItemQuantity, addCartItem } from '../actions';
import { calculateTotalPrice } from '../util/price';
import _ from 'lodash';
import CartItem from './CartItem';
import './CheckoutSummary.css';

const CheckoutSummary = React.createClass({
  render() {
    const { cart } = this.props.globalState;
    const hideRemoveButton = cart.length < 2;
    const totalPrice = calculateTotalPrice(cart);

    return (
      <div className="CheckoutSummary">
        <h3 className="CheckoutSummary__header">Order summary</h3>

        <ul className="CheckoutSummary__cart">
          {
            _.map(cart, (item, index) =>
              <li key={index}>
                <CartItem
                  index={index}
                  item={item}
                  hideRemoveButton={hideRemoveButton}
                  onRemoveClick={this._onCartItemRemoveClick}
                  onEditClick={this._onCartItemEditClick}
                  onIncreaseQuantityClick={this._onCartItemIncreaseQuantityClick}
                  onDecreaseQuantityClick={this._onCartItemDecreaseQuantityClick}
                />
              </li>
            )
          }
          <li className="CheckoutSummary__add noselect">
            <a onClick={this._onAddPoster}>
              <Icon type="plus" /> Add poster
            </a>
          </li>
        </ul>

        <div className="CheckoutSummary__price-summary">
          <table className="CheckoutSummary__price-table">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>{totalPrice.label}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>0.00 €</td>
              </tr>
              <tr className="CheckoutSummary__total-row">
                <td>Total</td>
                <td>{totalPrice.label}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  },

  _onCartItemEditClick(index) {
    this.props.dispatch(editCartItem(index));
  },

  _onCartItemRemoveClick(index) {
    this.props.dispatch(removeCartItem(index));
  },

  _onCartItemIncreaseQuantityClick(index) {
    this.props.dispatch(addCartItemQuantity({ index, add: 1 }));
  },

  _onCartItemDecreaseQuantityClick(index) {
    this.props.dispatch(addCartItemQuantity({ index, add: -1 }));
  },

  _onAddPoster() {
    this.props.dispatch(addCartItem());
  }
});

export default connect(state => ({ globalState: state }))(CheckoutSummary);
