import React from 'react';
import _ from 'lodash';
import config from '../config';
import { Radio } from 'antd';
import { calculatePrice, getCurrencySymbol } from '../util/price';
const { PosterIcon, TickIcon } = require('../util/svg');
import Price from './Price';
import './PosterSizeSelect.css';

const SIZES = [
  {
    id: '30x40cm',
    label: '30cm x 40cm',
    poster: {
      width: 30,
      height: 40,
    },
  },
  {
    id: '50x70cm',
    label: '50cm x 70cm',
    poster: {
      width: 50,
      height: 70,
    },
  },
  {
    id: '70x100cm',
    label: '70cm x 100cm',
    poster: {
      width: 70,
      height: 100,
    },
  }
];

const PosterSizeSelect = React.createClass({
  render() {
    return (
      <Radio.Group className="PosterSizeSelect" value={this.props.selected} onChange={this._onChange}>
        {
          _.map(SIZES, item => {
            const price = calculatePrice(item.id);

            return <Radio
              key={item.id}
              value={item.id}
            >
              {item.label}
              <span className="PosterSizeSelect__price">
                <Price value={price.value} currency={price.currency} />
              </span>
            </Radio>;
          })
        }
      </Radio.Group>
    );
  },

  _onChange(e) {
    this.props.onChange(e.target.value);
  }
});

export default PosterSizeSelect;

