import React from 'react';
import _ from 'lodash';
import { Radio, Tooltip } from 'antd';
import MediaQuery from 'react-responsive';
import { getPosterSize, POSTER_SIZE_TYPES } from 'alvarcarto-common';
import { calculateItemPrice } from 'alvarcarto-price-util';
import CONST from '../constants';
import { mapItemToSku } from '../util';

class PosterSizeSelect extends React.Component {
  render() {
    const sizeTypeValue = this._getSelectedSize().type;
    return (
      <div className="PosterSizeSelect">
        <MediaQuery minWidth={CONST.SCREEN_MD}>
          {(matches) => {
            return <div className="PosterSizeSelect__type">
              <Radio.Group onChange={this._onTypeChange} value={sizeTypeValue}>
                {
                  _.map(POSTER_SIZE_TYPES, type => {
                    const radioButton = <Radio.Button key={type.id} value={type.id}>{type.label}</Radio.Button>;
                    if (!matches) {
                      return radioButton;
                    }

                    return <Tooltip key={type.id} title={type.description}>
                      {radioButton}
                    </Tooltip>
                  })
                }
              </Radio.Group>
            </div>
          }}
        </MediaQuery>

        <MediaQuery minWidth={CONST.SCREEN_MD}>
          {(matches) => {
            if (matches) {
              return this._renderRadio();
            } else {
              return this._renderSelect();
            }
          }}
        </MediaQuery>
      </div>
    );
  }

  _renderSelect = () => {
    const sizes = this._getSizesToShow();
    return <div className="pure-css-select-style theme-default">
      <select
        value={this.props.selected}
        onChange={this._onChange}
      >
        {
          _.map(sizes, (item) => {
            const price = this._getPriceForItem({
              size: item.id,
              material: this.props.material,
            });

            return <option
              value={item.id}
              key={item.id}
            >
              {item.label} ({price.label})
            </option>;
          })
        }
      </select>
    </div>;
  };

  _renderRadio = () => {
    const sizes = this._getSizesToShow();
    return <Radio.Group value={this.props.selected} onChange={this._onChange}>
      {
        _.map(sizes, item => {
          const price = this._getPriceForItem({
            size: item.id,
            material: this.props.material,
          });

          return <Radio
            key={item.id}
            value={item.id}
          >
            {item.label}
            <span className="PosterSizeSelect__price">{price.label}</span>
          </Radio>;
        })
      }
    </Radio.Group>;
  };

  _getPriceForItem = (mapItem) => {
    const price = calculateItemPrice({
      sku: mapItemToSku(mapItem),
      quantity: 1
    }, { currency: this.props.currency });

    return price;
  }

  _getSelectedSize = () => {
    const { props } = this;
    return getPosterSize(props.selected);
  };

  _getSizesToShow = () => {
    const selectedType = this._getSelectedSize().type
    const sizes = _.filter(this.props.options, size => size.type === selectedType);
    return sizes;
  };

  _onChange = (e) => {
    this.props.onChange(e.target.value);
  };

  _onTypeChange = (e) => {
    this.props.onTypeChange(e.target.value);
  };
}

export default PosterSizeSelect;

