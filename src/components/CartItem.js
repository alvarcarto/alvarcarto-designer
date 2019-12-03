import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Tooltip, Popconfirm } from 'antd';
import { getStyle } from '../util';
import { calculateItemPrice } from 'alvarcarto-price-util';
import { createPosterThumbnailUrl } from '../util';
import IconButton from './IconButton';
import ImageLoader from 'react-imageloader';
import CONST from '../constants';
import ButtonLink from './ButtonLink';
import { cartItemToMapItem } from '../util/cart-state';

function preloader() {
  return <Icon type="loading" />;
}

class CartItem extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.shape({
      sku: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      customisation: PropTypes.shape({
        mapBounds:  PropTypes.object,
        mapCenter:  PropTypes.object.isRequired,
        mapZoom: PropTypes.number.isRequired,
        mapStyle: PropTypes.string.isRequired,
        mapPitch: PropTypes.number.isRequired,
        mapBearing: PropTypes.number.isRequired,
        orientation: PropTypes.string.isRequired,
        labelHeader: PropTypes.string.isRequired,
        labelSmallHeader: PropTypes.string.isRequired,
        labelText: PropTypes.string.isRequired,
      }),
    }),
    currency: PropTypes.string.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onIncreaseQuantityClick: PropTypes.func.isRequired,
    onDecreaseQuantityClick: PropTypes.func.isRequired,
  };

  render() {
    const { props } = this;
    const { item } = props;
    const mapItem = cartItemToMapItem(item);
    const price = calculateItemPrice(item, { currency: props.currency });
    const styleName = getStyle(mapItem.mapStyle).name;
    const isDecreaseDisabled = item.quantity < 2;
    let cartImageClassName = 'CartItem__image';
    if (mapItem.orientation === 'landscape') {
      cartImageClassName += ' CartItem__image--landscape';
    }

    return (
      <div className="CartItem">
        <ImageLoader
          className={cartImageClassName}
          src={createPosterThumbnailUrl(mapItem)}
          preloader={preloader}
        >
          <Icon type="frown-o" />
        </ImageLoader>

        <div className="CartItem__content">
          <h3 className="CartItem__title">{mapItem.labelHeader}</h3>
          <h4 className="CartItem__type">{styleName}, {mapItem.size}</h4>
          <h4 className="CartItem__price">{price.label}</h4>
          <div className="CartItem__quantity">
            <IconButton
              disabled={isDecreaseDisabled}
              className="noselect"
              onClick={isDecreaseDisabled ? null : this._onDecreaseQuantity}
              type="minus"
            />
            <span className="CartItem__quantity-number">{item.quantity}</span>
            <IconButton className="noselect" onClick={this._onIncreaseQuantity} type="plus" />
          </div>
          <ul className="CartItem__actions noselect">
            <li>
              <ButtonLink onClick={this._onEdit}>
                <Tooltip title="Edit poster">
                  <Icon style={{ color: CONST.PRIMARY_COLOR }} type="edit" />
                </Tooltip>
              </ButtonLink>
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
                      <ButtonLink>
                        <Tooltip title="Remove item from order">
                          <Icon type="close" />
                        </Tooltip>
                      </ButtonLink>
                    </Popconfirm>
                  </li>
            }
          </ul>
        </div>
      </div>
    );
  }

  _onEdit = () => {
    this.props.onEditClick(this.props.index);
  };

  _onRemove = () => {
    this.props.onRemoveClick(this.props.index);
  };

  _onIncreaseQuantity = () => {
    this.props.onIncreaseQuantityClick(this.props.index);
  };

  _onDecreaseQuantity = () => {
    this.props.onDecreaseQuantityClick(this.props.index);
  };
}

export default CartItem;
