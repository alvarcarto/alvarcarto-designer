import React from 'react';
import { connect } from 'react-redux';
import {
  removeCartItem,
  editCartItem,
  addCartItemQuantity,
  addCartItem,
  setPromotion
} from '../actions';
import { calculateCartPrice, calculateItemPrice, getCurrencySymbol, getItemLabel } from 'alvarcarto-price-util';
import _ from 'lodash';
import CartItem from './CartItem';
import AddPromotionLink from './AddPromotionLink';
import IconButton from './IconButton';
import history from '../history';

class CheckoutSummary extends React.Component {
  render() {
    const { cart, additionalCart, promotion } = this.props.globalState;
    const hideRemoveButton = cart.length < 2;
    const combinedCart = cart.concat(additionalCart);
    const totalPrice = calculateCartPrice(combinedCart, { promotion, ignorePromotionExpiry: true });
    const originalPrice = calculateCartPrice(cart);

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
                <td>{originalPrice.label}</td>
              </tr>
              {this._renderDiscountRow(totalPrice, promotion)}

              {
                _.map(additionalCart, (item, index) =>
                  <tr key={index}>
                    <td>{getItemLabel(item)}</td>
                    <td>{calculateItemPrice(item).label}</td>
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

    const discountCurrencySymbol = getCurrencySymbol(totalPrice.discount.currency);
    const discountHumanValue = (-totalPrice.discount.value / 100).toFixed(2);
    const discountPriceLabel = `${discountHumanValue} ${discountCurrencySymbol}`;

    return <tr>
      <td>{promotion.label}</td>
      <td>{discountPriceLabel}</td>
    </tr>;
  };

  _getPromotionLink = () => {
    const { promotion } = this.props.globalState;
    if (promotion) {
      return <a onClick={this._onDeletePromotion}>Remove promotion</a>;
    }

    return <AddPromotionLink onPromotionApply={this._onApplyPromotion} />;
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
