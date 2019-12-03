import React from 'react';
import { connect } from 'react-redux';
import {
  removeCartItem,
  editCartItem,
  addCartItemQuantity,
  addCartItem,
  setPromotion
} from '../actions';
import { calculateCartPrice, calculateItemPrice, getProduct } from 'alvarcarto-price-util';
import _ from 'lodash';
import CartItem from './CartItem';
import AddPromotionLink from './AddPromotionLink';
import IconButton from './IconButton';
import UnstyledButton from './UnstyledButton';
import history from '../history';

class CheckoutSummary extends React.Component {
  render() {
    const { cart, additionalCart, promotion, currency } = this.props.globalState;
    const hideRemoveButton = cart.length < 2;
    const combinedCart = cart.concat(additionalCart);
    const totalPrice = calculateCartPrice(combinedCart, {
      currency,
      promotion,
      ignorePromotionExpiry: true
    });
    const subtotalPrice = calculateCartPrice(cart, { currency });

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
                  currency={currency}
                  hideRemoveButton={hideRemoveButton}
                  onRemoveClick={this._onCartItemRemoveClick}
                  onEditClick={this._onCartItemEditClick}
                  onIncreaseQuantityClick={this._onCartItemIncreaseQuantityClick}
                  onDecreaseQuantityClick={this._onCartItemDecreaseQuantityClick}
                />
              </li>
            )
          }
          <li className="CheckoutSummary__actions noselect">
            <IconButton onClick={this._onAddPoster} type="plus">Add map</IconButton>
            {this._getPromotionLink()}
          </li>
        </ul>

        <div className="CheckoutSummary__price-summary">
          <table className="CheckoutSummary__price-table">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>{subtotalPrice.label}</td>
              </tr>
              {this._renderDiscountRow(totalPrice, promotion)}

              {
                _.map(additionalCart, (item, index) =>
                  <tr key={index}>
                    <td>{getProduct(item.sku).name}</td>
                    <td>{calculateItemPrice(item, { currency }).label}</td>
                  </tr>
                )
              }

              <tr className="CheckoutSummary__total-row">
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

  _getPromotionLink = () => {
    const { promotion, currency } = this.props.globalState;
    if (promotion) {
      return <UnstyledButton onClick={this._onDeletePromotion}>Remove promotion</UnstyledButton>;
    }

    return <AddPromotionLink currency={currency} onPromotionApply={this._onApplyPromotion} />;
  };

  _onDeletePromotion = () => {
    this.props.dispatch(setPromotion(null));
  };

  _onApplyPromotion = (promotion) => {
    this.props.dispatch(setPromotion(promotion));
  };

  _onCartItemEditClick = (index) => {
    history.push('/');
    this.props.dispatch(editCartItem(index));
  };

  _onCartItemRemoveClick = (index) => {
    this.props.dispatch(removeCartItem(index));
  };

  _onCartItemIncreaseQuantityClick = (index) => {
    this.props.dispatch(addCartItemQuantity({ index, add: 1 }));
  };

  _onCartItemDecreaseQuantityClick = (index) => {
    this.props.dispatch(addCartItemQuantity({ index, add: -1 }));
  };

  _onAddPoster = () => {
    history.push('/');
    this.props.dispatch(addCartItem());
  };
}

export default connect(state => ({ globalState: state }))(CheckoutSummary);
