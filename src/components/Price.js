import React from 'react';
import { currencyToSymbol } from '../util';

const Price = (props) => <div className="Price">
  <span className="Price__value">{props.value}</span>
  <span className="Price__currency">{currencyToSymbol(props.currency)}</span>
</div>;

export default Price;