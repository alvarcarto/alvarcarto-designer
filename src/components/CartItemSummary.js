import React from 'react';
import _ from 'lodash';
import { createApiUrlQuery } from '../util';
import './CartItemSummary.css';

const CartItemSummary = React.createClass({
  render() {
    return (
      <div className="CartItemSummary">
        <img src={this._createImageUrl()} className="CartItemSummary__image" />
        <div className="CartItemSummary__content">
          <h3 className="CartItemSummary__title">Helsinki</h3>
          <h4 className="CartItemSummary__type">Orange, 50 x 70cm</h4>
          <h4 className="CartItemSummary__price">45.00€</h4>
        </div>
      </div>
    );
  },

  _createImageUrl() {
    const { globalState } = this.props;
    const query = createApiUrlQuery(globalState);
    return `http://tiles.alvarcarto.com:5000/api/placeit${query}&resizeToWidth=600`;
  }
});

export default CartItemSummary;
