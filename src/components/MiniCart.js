import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

// https://github.com/ctrlplusb/react-sizeme/issues/131#issuecomment-378911202
import sizeMe from 'react-sizeme';
import autoprefix from 'auto-prefixer';
import {
  removeCartItem,
  editCartItem,
  addCartItemQuantity,
  addCartItem,
  setMiniCartPosition,
} from '../actions';
import _ from 'lodash';
import { Icon } from 'antd';
import MiniCartItem from './MiniCartItem';
import { posterSizeToThumbnailPixels } from '../util';

class MiniCart extends React.Component {
  state = {
    scrollButtonWidth: 30,
    minItemWidth: 86,
  };

  render() {
    const { cart, editCartItem } = this.props.globalState;
    const hideRemoveButton = cart.length < 2;

    const { scrollButtonWidth } = this.state;
    const { itemWidth } = this._getWindowSize();
    const cartWidth = this._getCartWindowWidth();

    const moveNRight = this._getPosition();

    const cartContainerCss = { width: cartWidth };
    const cartCss = { transform: `translate(${itemWidth * moveNRight}px)` };

    const scrollLeftClassName = this._isMoveItemsRightPossible()
      ? 'MiniCart__scroll-left'
      : 'MiniCart__scroll-left MiniCart__scroll-left--disabled';
    const scrollRightClassName = this._isMoveItemsLeftPossible()
      ? 'MiniCart__scroll-right'
      : 'MiniCart__scroll-right MiniCart__scroll-right--disabled';

    const className = `MiniCart noselect ${this.props.className ? this.props.className : ''}`;
    return <div className={className}>
      <a style={{ width: scrollButtonWidth }} className={scrollLeftClassName} onClick={this._moveItemsRight}>
        <Icon type="left" />
      </a>
      <div className="MiniCart__cart-container" style={autoprefix(cartContainerCss)}>
        <ul className="MiniCart__cart noselect" style={autoprefix(cartCss)}>
          <ReactCSSTransitionGroup
            className="MiniCart__cart"
            transitionName="cart-popin"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={300}
          >
            {
              _.map(cart, (item, index) =>
                <li key={item.id}>
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
            <li key="placeholder">
              <div style={{ width: itemWidth }} className="MiniCart__add-poster" onClick={this._onAddPosterClick}>
                <div className="MiniCart__poster" style={posterSizeToThumbnailPixels('50x70cm', 'portrait')}>
                  <Icon type="plus" />
                </div>
                <p className="MiniCart__add-poster-text">Add map</p>
              </div>
            </li>
          </ReactCSSTransitionGroup>
        </ul>
      </div>
      <a style={{ width: scrollButtonWidth }} className={scrollRightClassName} onClick={() => this._moveItemsLeft()}>
        <Icon type="right" />
      </a>
    </div>;
  }

  _getPosition = () => {
    return this.props.globalState.miniCartPosition;
  };

  _getItemsCount = () => {
    const { cart } = this.props.globalState;
    // Add poster placeholder takes one spot
    return cart.length + 1;
  };

  _getWindowSize = () => {
    const width = this._getCartWindowWidth();
    const divider = width / this.state.minItemWidth;
    const windowSize = Math.floor(divider);
    const singleWidth = width / windowSize;

    return {
      itemWidth: singleWidth,
      windowSize,
    };
  };

  _getCartWindowWidth = () => {
    return this.props.size.width - 2 * this.state.scrollButtonWidth;
  };

  _isMoveItemsRightPossible = () => {
    return isMoveItemsRightPossible(this._getPosition());
  };

  _isMoveItemsLeftPossible = (_add) => {
    const additionalItems = _add ? _add : 0;
    const itemsCount = this._getItemsCount() + additionalItems;
    const { windowSize } = this._getWindowSize();
    return isMoveItemsLeftPossible(this._getPosition(), itemsCount, windowSize);
  };

  _moveItemsLeft = (_add) => {
    if (!this._isMoveItemsLeftPossible(_add)) {
      return;
    }

    this._setPosition(this._getPosition() - 1);
  };

  _moveItemsRight = () => {
    if (!this._isMoveItemsRightPossible()) {
      return;
    }

    this._setPosition(this._getPosition() + 1);
  };

  _setPosition = (pos) => {
    this.props.dispatch(setMiniCartPosition(pos));
  };

  _onCartItemEditClick = (index) => {
    this.props.dispatch(editCartItem(index));
  };

  _onAddPosterClick = () => {
    this._moveItemsLeft(1);

    this.props.dispatch(addCartItem());
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
}


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

const SizeAwareMiniCart = sizeMe({ refreshRate: 40 })(MiniCart);

export default connect(state => ({ globalState: state }))(SizeAwareMiniCart);
