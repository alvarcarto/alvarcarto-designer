import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { addCartItem, removeCartItem, editCartItem } from '../actions';
import AlvarMapDesignPanel from './AlvarMapDesignPanel';
import PricePanel from './PricePanel';
import SmallCart from './SmallCart';
import './SidePanel.css';

const SidePanel = React.createClass({
  render() {
    let className = 'SidePanel';
    const { globalState } = this.props;

    return (
      <div className="SidePanel">
        <AlvarMapDesignPanel
          className="SidePanel__upper"
          dispatch={this.props.dispatch}
          globalState={globalState}
        />
        <div className="SidePanel__middle">
          <SmallCart
            onRemoveClick={this._onRemoveCartItemClick}
            onAddClick={this._onAddCartItemClick}
            onItemClick={this._onCartItemClick}
            cart={globalState.cart}
            selected={globalState.editCartItem}
          />
        </div>
        <div className="SidePanel__lower">
          <PricePanel dispatch={this.props.dispatch} globalState={globalState} />
        </div>
      </div>
    );
  },

  _onRemoveCartItemClick(index) {
    console.log('remove index', index)
    this.props.dispatch(removeCartItem(index));
  },

  _onAddCartItemClick() {
    this.props.dispatch(addCartItem());
  },

  _onCartItemClick(index) {
    this.props.dispatch(editCartItem(index));
  }
});

export default connect(state => ({ globalState: state }))(SidePanel);
