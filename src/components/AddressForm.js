import React from 'react';
import _ from 'lodash';
import { Form, Input, Icon, Checkbox, Select, Radio } from 'antd';
import countries from 'i18n-iso-countries';
import CountrySelect from './CountrySelect';

const sortedCountries = _.sortBy(_.map(countries.getNames('en'), (name, code) => ({
  name,
  code,
})), 'label');
const selectFilterFunc = (input, option) =>
  _.startsWith(option.props.name.toLowerCase(), input.toLowerCase());

const form = {
  name: (val) => {
    if (_.isEmpty(val)) {
      return new Error('Full name is required.');
    }
  },
  address: (val) => {
    if (_.isEmpty(val)) {
      return new Error('Street address is required.');
    }
  },
  addressExtra: () => null,
  city: (val) => {
    if (_.isEmpty(val)) {
      return new Error('City is required.');
    }
  },
  postalCode: (val) => {
    if (_.isEmpty(val)) {
      return new Error('Postal code is required.');
    }
  },
  country: (val) => {
    if (_.isEmpty(val)) {
      return new Error('Country is required.');
    }
  },
  state: () => null,
  phone: () => null,
};

const AddressForm = React.createClass({
  getInitialState() {
    return {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.mapValues(form, () => null),
      shouldValidate: _.mapValues(form, () => false),
    };
  },

  render() {
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
    };

    const formErrors = this._getFormErrors();
    return (
      <div className="AddressForm">
        <Form.Item {...formErrors.name} {...formItemLayout} required label="Full name">
          <Input name="name" onBlur={this._onInputBlur} onChange={this._onInputChange} placeholder="Full name" />
        </Form.Item>

        <Form.Item {...formErrors.address} {...formItemLayout} required label="Street address">
          <Input
            name="address"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="Street address / PO Box"
          />
          <Input
            name="addressExtra"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="Apartment / Floor"
            className="input--short"
          />
        </Form.Item>

        <Form.Item {...formErrors.city} {...formItemLayout} required label="City">
          <Input
            name="city"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="City / Town"
          />
        </Form.Item>

        <Form.Item {...formErrors.postalCode} {...formItemLayout} required label="Postal code">
          <Input
            name="postalCode"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="ZIP / Postal code"
            className="input--short"
          />
        </Form.Item>

        <Form.Item {...formErrors.country} {...formItemLayout} required label="Country">
          <CountrySelect
            {...this.props}
            onBlur={this._onCountryBlur}
            onChange={this._onCountryChange}
          />
        </Form.Item>

        <Form.Item {...formErrors.state} {...formItemLayout} label="State">
          <Input
            name="state"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="State"
            className="input--short"
          />
        </Form.Item>

        <Form.Item {...formErrors.phone} {...formItemLayout} label="Phone number" extra="In case needed by postal service.">
          <Input
            name="phone"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="Phone number"
          />
        </Form.Item>
      </div>
    );
  },

  _getFormErrors() {
    const formErrors = {};
    _.forEach(this.state.values, (val, key) => {
      const hasBeenBlurred = this.state.shouldValidate[key];
      if (!_.isFunction(form[key]) || !hasBeenBlurred) {
        return;
      }

      const err = form[key](val);
      if (_.isError(err)) {
        formErrors[key] = {
          validateStatus: 'error',
          help: err.message,
        };
      }
    });

    return formErrors;
  },

  _onInputChange(e) {
    const { name, value } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: value
      }),
    }));
  },

  _onInputBlur(e) {
    const { name } = e.target;

    this.setState((state) => ({
      shouldValidate: _.extend(state.shouldValidate, {
        [name]: true
      }),
    }));
  },

  _onCountryChange(value) {
    this.setState((state) => ({
      values: _.extend(state.values, {
        country: value
      }),
    }));
  },

  _onCountryBlur() {
    this.setState((state) => ({
      shouldValidate: _.extend(state.shouldValidate, {
        country: true,
      }),
    }));
  }
});

export default AddressForm;
