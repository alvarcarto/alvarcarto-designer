import React from 'react';
import _ from 'lodash';
import { Button, Icon, Tooltip, Popconfirm } from 'antd';
import { getStyle } from '../util';
import { getCurrencySymbol, calculatePrice } from '../util/price';
import { createApiUrlQuery } from '../util';
import CONST from '../constants';

const CartItem = React.createClass({
  propTypes: {
    index: React.PropTypes.number.isRequired,
    item: React.PropTypes.shape({
      quantity: React.PropTypes.number.isRequired,
      mapCenter:  React.PropTypes.object.isRequired,
      mapZoom: React.PropTypes.number.isRequired,
      mapStyle: React.PropTypes.string.isRequired,
      mapPitch: React.PropTypes.number.isRequired,
      mapBearing: React.PropTypes.number.isRequired,
      orientation: React.PropTypes.string.isRequired,
      size: React.PropTypes.string.isRequired,
      labelHeader: React.PropTypes.string.isRequired,
      labelSmallHeader: React.PropTypes.string.isRequired,
      labelText: React.PropTypes.string.isRequired,
    }),
    onRemoveClick: React.PropTypes.func.isRequired,
    onEditClick: React.PropTypes.func.isRequired,
    onIncreaseQuantityClick: React.PropTypes.func.isRequired,
    onDecreaseQuantityClick: React.PropTypes.func.isRequired,
  },

  render() {
    const { props } = this;
    const item = props.item;

    const price = calculatePrice(this.props.item);
    const styleName = getStyle(item.mapStyle).name;
    const isDecreaseDisabled = this.props.item.quantity < 2;
    return (
      <div className="CartItem">
        <img src="/assets/sf.png" className="CartItem__image" />
        <div className="CartItem__content">
          <h3 className="CartItem__title">{item.labelHeader}</h3>
          <h4 className="CartItem__type">{styleName}, {item.size}</h4>
          <h4 className="CartItem__price">{price.label}</h4>
          <div className="CartItem__quantity">
            <Icon
              className={isDecreaseDisabled ? 'CartItem__quantity-action--disabled noselect' : 'noselect'}
              onClick={isDecreaseDisabled ? null : this._onDecreaseQuantity}
              type="minus"
            />
            <span className="CartItem__quantity-number">{item.quantity}</span>
            <Icon className="noselect" onClick={this._onIncreaseQuantity} type="plus" />
          </div>
          <ul className="CartItem__actions noselect">
            <li>
              <a onClick={this._onEdit}>
                <Tooltip title="Edit poster">
                  <Icon style={{ color: CONST.PRIMARY_COLOR }} type="edit" />
                </Tooltip>
              </a>
            </li>
            {
              this.props.hideRemoveButton
                ? null
                : <li>
                    <Popconfirm
                      placement="bottom"
                      title="Remove from order? Changes will be lost."
                      onConfirm={this._onRemove}
                      okText="Remove"
                      cancelText="Cancel"
                    >
                      <a>
                        <Tooltip title="Remove item from order">
                          <Icon type="close" />
                        </Tooltip>
                      </a>
                    </Popconfirm>
                  </li>
            }
          </ul>
        </div>
      </div>
    );
  },

  _onEdit() {
    this.props.onEditClick(this.props.index);
  },

  _onRemove() {
    this.props.onRemoveClick(this.props.index);
  },

  _onIncreaseQuantity() {
    this.props.onIncreaseQuantityClick(this.props.index);
  },

  _onDecreaseQuantity() {
    this.props.onDecreaseQuantityClick(this.props.index);
  },

  _createImageUrl() {
    const { globalState } = this.props;
    const query = createApiUrlQuery(globalState);
    return `http://tiles.alvarcarto.com:5000/api/placeit${query}&resizeToWidth=600`;
  }
});

export default CartItem;
