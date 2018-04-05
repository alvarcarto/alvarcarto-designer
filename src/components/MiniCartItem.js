import React from 'react';
import _ from 'lodash';
import { Icon, Tooltip, Popconfirm } from 'antd';
import { getStyle } from '../util';
import { posterSizeToThumbnailPixels, getPosterLook } from '../util';
import IconButton from './IconButton';

const MiniCartItem = React.createClass({
  propTypes: {
    selected: React.PropTypes.bool.isRequired,
    index: React.PropTypes.number.isRequired,
    item: React.PropTypes.shape({
      posterStyle: React.PropTypes.string.isRequired,
      quantity: React.PropTypes.number.isRequired,
      mapBounds:  React.PropTypes.object.isOptional,
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
    const isDecreaseDisabled = this.props.item.quantity < 2;

    let className = 'MiniCartItem noselect';
    if (props.selected) {
      className += ' MiniCartItem--selected';
    }

    let posterClassName = 'MiniCartItem__poster';
    if (item.orientation === 'landscape') {
      posterClassName += ' MiniCartItem__poster--landscape';
    }

    const posterSize = posterSizeToThumbnailPixels(item.size, item.orientation);
    const posterStyle = getPosterLook(item.posterStyle);
    const mapStyle = getStyle(item.mapStyle);

    return (
      <div style={props.style} className={className} onClick={this._onEdit}>
        <div className={posterClassName} style={{ width: `${posterSize.width}px`, height: `${posterSize.height}px` }}>
          <img
            className="MiniCartItem__style-icon"
            src={posterStyle.icon}
            alt=""
          />
          <div style={{ background: mapStyle.color }} className="MiniCartItem__map-color"></div>

          <span className="MiniCartItem__quantity-number">{item.quantity}x</span>


          {
            this.props.hideRemoveButton
              ? null
              : <div className="MiniCartItem__action MiniCartItem__remove noselect">
                  <Popconfirm
                    placement="top"
                    title="Remove from order? Changes will be lost."
                    onConfirm={this._onRemove}
                    okText="Remove"
                    cancelText="Cancel"
                  >
                    <a>
                      <Tooltip title="Remove item from order">
                        <IconButton type="plus" />
                      </Tooltip>
                    </a>
                  </Popconfirm>
                </div>
          }

          <IconButton
            disabled={isDecreaseDisabled}
            className="MiniCartItem__action MiniCartItem__decrease-quantity noselect"
            onClick={isDecreaseDisabled ? null : this._onDecreaseQuantity}
            type="minus"
          />

          <IconButton className="MiniCartItem__action MiniCartItem__increase-quantity noselect" onClick={this._onIncreaseQuantity} type="plus" />
        </div>

        <p className="MiniCartItem__title">{item.labelHeader.trim() ? item.labelHeader : <span>&nbsp;</span>}</p>
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
  }
});

export default MiniCartItem;
