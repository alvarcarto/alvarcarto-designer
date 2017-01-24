import React from 'react';
import _ from 'lodash';
import { Badge, Icon } from 'antd';
import './SmallCart.css';

const SmallCart = React.createClass({
  propTypes: {
    cart: React.PropTypes.array.isRequired,
    onItemClick: React.PropTypes.func.isRequired,
  },

  render() {
    const { cart } = this.props;

    return (
      <div className="SmallCart">
        {_.map(cart, (item, i) =>
          <SmallCartItem
            key={i}
            index={i}
            item={item}
            showRemove={cart.length > 1}
            onClick={this._onItemClick}
            onRemove={this._onItemRemoveClick}
            selected={this.props.selected === i}
          />
        )}
        <div onClick={this.props.onAddClick} className="SmallCart__add">
          <Icon type="plus" />
        </div>
      </div>
    );
  },

  _onItemClick(index) {
    this.props.onItemClick(index);
  },

  _onItemRemoveClick(index) {
    this.props.onRemoveClick(index);
  }
});

const SmallCartItem = React.createClass({
  render() {
    let className = 'SmallCartItem';
    if (this.props.selected) {
      className += ' SmallCartItem--selected';
    }

    const { quantity } = this.props.item;
    return <div className={className}>
      {
        quantity > 1
          ? <span className="SmallCartItem__quantity">{quantity}</span>
          : null
      }
      <img onClick={this._onClick} src="/assets/sf.png" alt="" />
      {
        this.props.showRemove
          ? <div onClick={this._onRemoveClick} className="SmallCartItem__remove">
              <Icon type="close" />
            </div>
          : null
      }
    </div>;
  },

  _onClick() {
    this.props.onClick(this.props.index);
  },

  _onRemoveClick() {
    this.props.onRemove(this.props.index);
  }
});

export default SmallCart;
