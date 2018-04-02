import React from 'react';
import { connect } from 'react-redux';
import {
  removeCartItem,
  editCartItem,
  addCartItemQuantity,
  addCartItem,
} from '../actions';
import { calculateCartPrice, getCurrencySymbol } from 'alvarcarto-price-util';
import _ from 'lodash';
import { Icon } from 'antd';
import MiniCartItem from './MiniCartItem';
import AddPromotionLink from './AddPromotionLink';
import IconButton from './IconButton';
import history from '../history';

const MiniCart = React.createClass({
  render() {
    const { cart, promotion, editCartItem } = this.props.globalState;
    const hideRemoveButton = cart.length < 2;
    const totalPrice = calculateCartPrice(cart, { promotion, ignorePromotionExpiry: true });
    const originalPrice = calculateCartPrice(cart);

    const className = `MiniCart ${this.props.className ? this.props.className : ''}`;
    return (
      <div className={className}>
        <ul className="MiniCart__cart">
          {
            _.map(cart, (item, index) =>
              <li key={index}>
                <MiniCartItem
                  index={index}
                  item={item}
                  selected={index === editCartItem}
                  hideRemoveButton={hideRemoveButton}
                  onRemoveClick={this._onCartItemRemoveClick}
                  onEditClick={this._onCartItemEditClick}
                  onIncreaseQuantityClick={this._onCartItemIncreaseQuantityClick}
                  onDecreaseQuantityClick={this._onCartItemDecreaseQuantityClick}
                />
              </li>
            )
          }
          <li>
            <div className="MiniCart__add-poster" onClick={this._onAddPoster}>
              <div className="MiniCart__poster">
                <Icon type="plus" />
              </div>
              <p className="MiniCart__add-poster-text">Add poster</p>
            </div>
          </li>
        </ul>
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

export default connect(state => ({ globalState: state }))(MiniCart);
