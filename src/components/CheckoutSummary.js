import React from 'react';
import { Input, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { removeCartItem, editCartItem, addCartItemQuantity, addCartItem } from '../actions';
import { calculateCartPrice } from 'alvarcarto-price-util';
import _ from 'lodash';
import CartItem from './CartItem';
import AddPromotionLink from './AddPromotionLink';
import IconButton from './IconButton';
import history from '../history';

const CheckoutSummary = React.createClass({
  render() {
    const { cart } = this.props.globalState;
    const hideRemoveButton = cart.length < 2;
    const totalPrice = calculateCartPrice(cart);

    return (
      <div className="CheckoutSummary">
        <h2 className="CheckoutSummary__header">Order summary</h2>

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
            <IconButton onClick={this._onAddPoster} type="plus">Add poster</IconButton>
          </li>
        </ul>

        <div className="CheckoutSummary__price-summary">
          <div className="CheckoutSummary__add-promotion">
            <AddPromotionLink />
          </div>

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
    history.push('/');
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
    history.push('/');
    this.props.dispatch(addCartItem());
  }
});

export default connect(state => ({ globalState: state }))(CheckoutSummary);
