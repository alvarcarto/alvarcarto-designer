import _ from 'lodash';
import React from 'react';
import countries from 'i18n-iso-countries';
import ResponsiveSelect from './ResponsiveSelect';

const sortedCountries = _.sortBy(_.map(countries.getNames('en'), (name, code) => ({
  name,
  code,
})), 'label');
const selectFilterFunc = (input, option) =>
  _.startsWith(option.props.name.toLowerCase(), input.toLowerCase());

class CountrySelect extends React.Component {
  render() {
    return (
      <ResponsiveSelect
        {...this.props}
        className="CountrySelect__search"
        showSearch
        placeholder="Enter a country"
        optionFilterProp="children"
        filterOption={selectFilterFunc}
        options={_.map(sortedCountries, (item) => ({
          key: item.code,
          name: item.name,
          value: item.code,
          label: item.name,
        }))}
      />
    );
  }
}

export default CountrySelect;