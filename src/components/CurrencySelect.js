import _ from 'lodash';
import { Icon } from 'antd';
import React from 'react';
import { getSupportedCurrencies } from 'alvarcarto-price-util';
import currencyFormatter from 'currency-formatter';

const sortedCurrencies = _.sortBy(getSupportedCurrencies());
const options = _.map(sortedCurrencies, currency => ({
  key: currency,
  label: `${currency} (${currencyFormatter.findCurrency(currency).symbol})`,
  value: currency,
}));

class CurrencySelect extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className={`CurrencySelect`}>
        <select
          value={props.value}
          onChange={this._onSelectChange}
        >
          {
            _.map(options, ({ key, value, label }) =>
              <option key={key} value={value}>
                {label}
              </option>
            )
          }
        </select>

        <Icon type="caret-down" />
      </div>
    );
  }

  _onSelectChange = (event) => {
    this.props.onChange(event.target.value);
  };
}

export default CurrencySelect;
