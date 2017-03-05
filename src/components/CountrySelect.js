import _ from 'lodash';
import React from 'react';
import { Select } from 'antd';
import countries from 'i18n-iso-countries';

const sortedCountries = _.sortBy(_.map(countries.getNames('en'), (name, code) => ({
  name,
  code,
})), 'label');
const selectFilterFunc = (input, option) =>
  _.startsWith(option.props.name.toLowerCase(), input.toLowerCase());

const CountrySelect = React.createClass({
  render() {
    return (
      <Select
        {...this.props}
        size="large"
        className="CountrySelect__search"
        showSearch
        placeholder="Enter a country"
        optionFilterProp="children"
        filterOption={selectFilterFunc}
      >
        {
          _.map(sortedCountries, (item) =>
            <Select.Option name={item.name} key={item.code} value={item.code}>{item.name}</Select.Option>
          )
        }
      </Select>
    );
  }
});

export default CountrySelect;