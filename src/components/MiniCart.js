import React from 'react';
import { connect } from 'react-redux';
import sizeMe from 'react-sizeme';
import autoprefix from 'auto-prefixer';
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
import { posterSizeToThumbnailPixels } from '../util';

const MiniCart = React.createClass({
  getInitialState() {
    return {
      position: 0,
      scrollButtonWidth: 30,
      minItemWidth: 80,
    };
  },

  render() {
    const { cart, editCartItem } = this.props.globalState;
    const hideRemoveButton = cart.length < 2;

    const { scrollButtonWidth } = this.state;
    const { itemWidth } = this._getWindowSize();
    const cartWidth = this._getCartWindowWidth();

    const moveNRight = this.state.position;

    const cartCss = {
      width: cartWidth,
      transform: `translate(${itemWidth * moveNRight}px)`,
    };

    const className = `MiniCart ${this.props.className ? this.props.className : ''}`;
    return <div className={className}>
      <a style={{ width: scrollButtonWidth }} className="MiniCart__scroll-left" onClick={this._moveItemsRight}>
        <Icon type="left" />
      </a>
      <div className="MiniCart__cart-container">
        <ul className="MiniCart__cart" style={autoprefix(cartCss)}>
          {
            _.map(cart, (item, index) =>
              <li key={index}>
                <MiniCartItem
                  style={{ width: itemWidth }}
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
            <div style={{ width: itemWidth }} className="MiniCart__add-poster" onClick={this._onAddPosterClick}>
              <div className="MiniCart__poster" style={posterSizeToThumbnailPixels('50x70cm', 'portrait')}>
                <Icon type="plus" />
              </div>
              <p className="MiniCart__add-poster-text">Add poster</p>
            {/*<p className="MiniCart__add-poster-sub-text">&nbsp;</p>*/}
            </div>
          </li>
        </ul>
      </div>
      <a style={{ width: scrollButtonWidth }} className="MiniCart__scroll-right" onClick={() => this._moveItemsLeft()}>
        <Icon type="right" />
      </a>
    </div>;
  },

  _getItemsCount() {
    const { cart } = this.props.globalState;
    // Add poster placeholder takes one spot
    return cart.length + 1;
  },

  _getWindowSize() {
    const width = this._getCartWindowWidth();
    const divider = width / this.state.minItemWidth;
    const windowSize = Math.floor(divider);
    const singleWidth = width / windowSize;

    return {
      itemWidth: singleWidth,
      windowSize,
    };
  },

  _getCartWindowWidth() {
    return this.props.size.width - 2 * this.state.scrollButtonWidth;
  },

  _moveItemsLeft(_add) {
    const additionalItems = _add ? _add : 0;
    const itemsCount = this._getItemsCount() + additionalItems;
    const { windowSize } = this._getWindowSize();
    if (!isMoveItemsLeftPossible(this.state.position, itemsCount, windowSize)) {
      return;
    }

    this.setState({
      position: this.state.position - 1,
    });
  },

  _moveItemsRight() {
    if (!isMoveItemsRightPossible(this.state.position)) {
      return;
    }

    this.setState({
      position: this.state.position + 1,
    });
  },

  _onCartItemEditClick(index) {
    const { windowSize } = this._getWindowSize();

    const itemPos = getItemPositionOnWindow(this.state.position, index);
    if (itemPos === 0) {
      this._moveItemsRight();
    } else if (itemPos === windowSize - 1) {
      this._moveItemsLeft();
    }

    this.props.dispatch(editCartItem(index));
  },

  _onAddPosterClick() {
    this._moveItemsLeft(1);

    this.props.dispatch(addCartItem());
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
});


// Numbers describe items, underscores are slots in the "window".
// Position is the index of left most item on the window
//
// Pos 0:  0 1 2
//         _ _
//
// Pos 1:    0 1   (not valid position)
//         _ _
//
// Pos -1: 0 1 2
//           _ _
//
//
// Case 1:
//
//   0 1 2
//   _ _
//
//   0 + 3 = 3
//   3 > 2, so move is possible
//
// Case 2:
//
//   0 1 2
//     _ _
//
//   -1 + 3 = 2
//   2 === 2, so move is not possible
function isMoveItemsLeftPossible(position, items, windowSize) {
  return position + items > windowSize
}

function isMoveItemsRightPossible(position) {
  return position < 0;
}

function getItemPositionOnWindow(position, index) {
  return position + index;
}

const SizeAwareMiniCart = sizeMe({ refreshRate: 40 })(MiniCart);

export default connect(state => ({ globalState: state }))(SizeAwareMiniCart);
