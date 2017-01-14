import React from 'react';
import { getCurrencySymbol } from '../util/price';
import './Price.css';

const Price = (props) => <div className="Price">
  <span className="Price__value">{props.value}</span>
  <span className="Price__currency">{getCurrencySymbol(props.currency)}</span>
</div>;

export default Price;