import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip, Popconfirm } from 'antd';
import { getStyle } from '../util';
import { posterSizeToThumbnailPixels, getPosterLook } from '../util';
import IconButton from './IconButton';
import { cartItemToMapItem } from '../util/cart-state';

class MiniCartItem extends React.Component {
  static propTypes = {
    selected: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    mapItem: PropTypes.shape({
      sku: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      customisation: PropTypes.shape({
        posterStyle: PropTypes.string.isRequired,
        mapBounds:  PropTypes.object,
        mapZoom: PropTypes.number.isRequired,
        mapStyle: PropTypes.string.isRequired,
        mapPitch: PropTypes.number.isRequired,
        mapBearing: PropTypes.number.isRequired,
        orientation: PropTypes.string.isRequired,
        labelHeader: PropTypes.string.isRequired,
        labelSmallHeader: PropTypes.string.isRequired,
        labelText: PropTypes.string.isRequired,
      })
    }),
    onRemoveClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onIncreaseQuantityClick: PropTypes.func.isRequired,
    onDecreaseQuantityClick: PropTypes.func.isRequired,
  };

  render() {
    const { props } = this;
    const { item } = props;
    const mapItem = cartItemToMapItem(item);
    const isDecreaseDisabled = item.quantity < 2;

    let className = 'MiniCartItem noselect';
    if (props.selected) {
      className += ' MiniCartItem--selected';
    }

    let posterClassName = 'MiniCartItem__poster';
    if (mapItem.orientation === 'landscape') {
      posterClassName += ' MiniCartItem__poster--landscape';
    }

    const posterSize = posterSizeToThumbnailPixels(mapItem.size, mapItem.orientation);
    const posterStyle = getPosterLook(mapItem.posterStyle);
    const mapStyle = getStyle(mapItem.mapStyle);

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
                    <div>
                      <Tooltip title="Remove item from order">
                        <IconButton theme="error" type="plus" />
                      </Tooltip>
                    </div>
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

        <span className="MiniCartItem__title">{mapItem.labelHeader.trim() ? mapItem.labelHeader : <span>&nbsp;</span>}</span>
      </div>
    );
  }

  _onEdit = () => {
    this.props.onEditClick(this.props.index);
  };

  _onRemove = (e) => {
    e.stopPropagation();
    this.props.onRemoveClick(this.props.index);
  };

  _onIncreaseQuantity = (e) => {
    e.stopPropagation();
    this.props.onIncreaseQuantityClick(this.props.index);
  };

  _onDecreaseQuantity = (e) => {
    e.stopPropagation();
    this.props.onDecreaseQuantityClick(this.props.index);
  };
}

export default MiniCartItem;
