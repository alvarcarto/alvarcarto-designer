import React from 'react';
import _ from 'lodash';
import { Form, Input } from 'antd';
import CountrySelect from './CountrySelect';

const form = {
  personName: (val, props) => {
    if (!props.disableName && _.isEmpty(val)) {
      return new Error('Full name is required.');
    }
  },
  streetAddress: (val) => {
    if (_.isEmpty(val)) {
      return new Error('Street address is required.');
    }
  },
  streetAddressExtra: () => null,
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
  countryCode: (val) => {
    if (_.isEmpty(val)) {
      return new Error('Country is required.');
    }
  },
  state: () => null,
  contactPhone: () => null,
};

const AddressForm = React.createClass({
  getInitialState() {
    let state = {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.mapValues(form, () => null),
      shouldValidate: _.mapValues(form, () => false),
    };

    if (this.props.initialState) {
      state.values = this.props.initialState.values;
    }

    return state;
  },

  render() {
    const formItemLayout = {
      labelCol: { span: 24, sm: { span: 7 }, md: { span: 7 }, lg: { span: 7 } },
      wrapperCol: { span: 24, sm: { span: 14 }, md: { span: 14 }, lg: { span: 14 } },
    };

    const defaultCountry = _.get(this.state.values, 'countryCode');
    const formErrors = this._getFormErrors(this.props.validate);
    return (
      <div className="AddressForm">
        {
          this.props.disableName
            ? null
            : <Form.Item {...formErrors.personName} {...formItemLayout} required label="Full name">
                <Input
                  name="personName"
                  defaultValue={_.get(this.state.values, 'personName')}
                  onBlur={this._onInputBlur}
                  onChange={this._onInputChange}
                  placeholder="Full name"
                />
              </Form.Item>
        }

        <Form.Item {...formErrors.streetAddress} {...formItemLayout} required label="Street address">
          <Input
            name="streetAddress"
            defaultValue={_.get(this.state.values, 'streetAddress')}
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="Street address / PO Box"
          />
          <Input
            name="streetAddressExtra"
            defaultValue={_.get(this.state.values, 'streetAddressExtra')}
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="Apartment / Floor"
            className="input--short"
          />
        </Form.Item>

        <Form.Item {...formErrors.city} {...formItemLayout} required label="City">
          <Input
            name="city"
            defaultValue={_.get(this.state.values, 'city')}
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="City / Town"
          />
        </Form.Item>

        <Form.Item {...formErrors.postalCode} {...formItemLayout} required label="Postal code">
          <Input
            name="postalCode"
            defaultValue={_.get(this.state.values, 'postalCode')}
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="ZIP / Postal code"
            className="input--short"
          />
        </Form.Item>

        <Form.Item {...formErrors.countryCode} {...formItemLayout} required label="Country">
          <CountrySelect
            {...this.props}
            {...defaultCountry ? { defaultValue: defaultCountry } : {}}
            onBlur={this._onCountryBlur}
            onChange={this._onCountryChange}
          />
        </Form.Item>

        <Form.Item {...formErrors.state} {...formItemLayout} label="State">
          <Input
            name="state"
            defaultValue={_.get(this.state.values, 'state')}
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="State"
            className="input--short"
          />
        </Form.Item>

        {
          this.props.disablePhone
            ? null
            : <Form.Item {...formErrors.contactPhone} {...formItemLayout} label="Phone number" extra="Recommended. Postal service may inform you via SMS.">
                <Input
                  name="contactPhone"
                  defaultValue={_.get(this.state.values, 'contactPhone')}
                  onBlur={this._onInputBlur}
                  onChange={this._onInputChange}
                  placeholder="Phone number"
                />
              </Form.Item>
        }
      </div>
    );
  },

  _getFormErrors(validateAll) {
    const formErrors = {};
    _.forEach(this.state.values, (val, key) => {
      const shouldValidate = validateAll ? true : this.state.shouldValidate[key];
      if (!_.isFunction(form[key]) || !shouldValidate) {
        return;
      }

      const err = form[key](val, this.props);
      if (_.isError(err)) {
        formErrors[key] = {
          validateStatus: 'error',
          help: err.message,
        };
      }
    });

    return formErrors;
  },

  _hasFormErrors() {
    const errs = this._getFormErrors(true);
    return _.keys(errs).length > 0;
  },

  _onInputChange(e) {
    const { name, value } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: value
      }),
    }), this._emitOnChange);
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
        countryCode: value
      }),
    }), this._emitOnChange);
  },

  _onCountryBlur() {
    this.setState((state) => ({
      shouldValidate: _.extend(state.shouldValidate, {
        countryCode: true,
      }),
    }));
  },

  _emitOnChange() {
    const isValid = !this._hasFormErrors();

    this.props.onChange({
      isValid,
      values: _.omitBy(this.state.values, (val, key) => val === null || val === ''),
    });
  }
});

export default AddressForm;
