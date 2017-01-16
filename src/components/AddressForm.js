import React from 'react';
import _ from 'lodash';
import { Form, Input, Icon, Checkbox, Select, Radio } from 'antd';
import countries from 'i18n-iso-countries';
import './AddressForm.css';

const sortedCountries = _.sortBy(_.map(countries.getNames('en'), (name, code) => ({
  name,
  code,
})), 'label');
const selectFilterFunc = (input, option) =>
  _.startsWith(option.props.name.toLowerCase(), input.toLowerCase());

const AddressForm = Form.create()(React.createClass({
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form>
        <Form.Item
          {...formItemLayout}
          required
          label="Full name"
        >
          {getFieldDecorator('name', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true, message: 'Full name is required.',
              }],
              onChange: this._onChange
            })(
              <Input placeholder="Full name" />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          required
          label="Street address"
        >
          {getFieldDecorator('address', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true, message: 'Street address is required.',
              }],
            })(
              <Input onChange={this._onChange} placeholder="Street address" />
          )}

          {getFieldDecorator('addressExtra')(
            <Input
              onChange={this._onChange}
              placeholder="Apartment / PO Box"
              className="AddressForm__input--short"
            />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          required
          label="City"
        >
          {getFieldDecorator('city', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true, message: 'City is required.',
              }],
            })(
            <Input onChange={this._onChange} placeholder="City / Town" />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          required
          label="Postal code"
        >
          {getFieldDecorator('postalCode', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true, message: 'Postal code is required.',
              }],
            })(
            <Input
              onChange={this._onChange}
              placeholder="ZIP / Postal code"
              className="AddressForm__input--short"
            />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          required
          label="Country"
        >
          {getFieldDecorator('country-select')(
            <Select
              {...this.props}
              onChange={this._onChange}
              size="large"
              className="CountrySelect__search"
              showSearch
              placeholder="Enter a country"
              optionFilterProp="children"
              filterOption={selectFilterFunc}
            >
              {
                _.map(sortedCountries, (item) =>
                  <Select.Option
                    key={item.code}
                    value={item.code}
                    name={item.name}
                  >
                    {item.name}
                  </Select.Option>
                )
              }
            </Select>
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="State"
        >
          {getFieldDecorator('state')(
            <Input
              onChange={this._onChange}
              placeholder="State"
              className="AddressForm__input--short"
            />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="Phone number"
          extra="In case needed by postal service."
        >
          {getFieldDecorator('phone')(
            <Input onChange={this._onChange} placeholder="Phone number" />
          )}
        </Form.Item>
      </Form>
    );
  },

  _onChange(e) {
    const values = this.props.form.getFieldsValue();
    console.log(values, e.target.value);

    /*
    this.props.form.validateFields((err, values) => {
      if (err) {
        this.props.onChange({
          isValid: false,
          values,
        });
        return;
      }

      this.props.onChange({
        isValid: true,
        values,
      });
    });
    */
  },
}));

export default AddressForm;
