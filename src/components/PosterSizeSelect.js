import React from 'react';
import _ from 'lodash';
import { Radio } from 'antd';
import MediaQuery from 'react-responsive';
import { calculateUnitPrice, getCurrencySymbol } from 'alvarcarto-price-util';
import Price from './Price';
import CONST from '../constants';

const SIZES = [
  {
    id: '30x40cm',
    label: '30 x 40 cm',
  },
  {
    id: '50x70cm',
    label: '50 x 70 cm',
  },
  {
    id: '70x100cm',
    label: '70 x 100 cm',
  },
  {
    id: '12x18inch',
    label: '12 x 18 inch',
  },
  {
    id: '18x24inch',
    label: '18 x 24 inch',
  },
  {
    id: '24x36inch',
    label: '24 x 36 inch',
  }
];

const PosterSizeSelect = React.createClass({
  render() {
    return (
      <MediaQuery maxWidth={CONST.SCREEN_SM}>
          {(matches) => {
            if (matches) {
              return this._renderSelect();
            } else {
              return this._renderRadio();
            }
          }}
        </MediaQuery>
    );
  },

  _renderSelect() {
    return <div className="PosterSizeSelect pure-css-select-style theme-default">
      <select
        value={this.props.selected}
        onChange={this._onChange}
      >
        {
          _.map(SIZES, (item) => {
            const price = calculateUnitPrice(item.id);

            return <option
              value={item.id}
              key={item.id}
            >
              {item.label} ({price.humanValue}{getCurrencySymbol(price.currency)})
            </option>;
          })
        }
      </select>
    </div>;
  },

  _renderRadio() {
    return <Radio.Group className="PosterSizeSelect" value={this.props.selected} onChange={this._onChange}>
      {
        _.map(SIZES, item => {
          const price = calculateUnitPrice(item.id);

          return <Radio
            key={item.id}
            value={item.id}
          >
            {item.label}
            <span className="PosterSizeSelect__price">
              <Price value={price.humanValue} currency={price.currency} />
            </span>
          </Radio>;
        })
      }
    </Radio.Group>;
  },

  _onChange(e) {
    this.props.onChange(e.target.value);
  }
});

export default PosterSizeSelect;

