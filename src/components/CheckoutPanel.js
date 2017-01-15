import React from 'react';
import _ from 'lodash';
import { Form, Input, Icon, Checkbox, Select } from 'antd';
import countries from 'i18n-iso-countries';
const { TruckIcon } = require('../util/svg');
import './CheckoutPanel.css';

const sortedCountries = _.sortBy(_.map(countries.getNames('en'), (name, code) => ({
  name,
  code,
})), 'label');
const selectFilterFunc = (input, option) =>
  option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;

const CheckoutPanel = Form.create()(React.createClass({
  render() {
    const { globalState } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <div className={`CheckoutPanel ${this.props.className}`}>
        <h2 className="CheckoutPanel__header">
          <Icon type="shopping-cart" />
          Checkout
        </h2>

        <h4 className="CheckoutPanel__form-header">
          Shipping details
        </h4>

        <Form onSubmit={this._onSubmit}>
          <Form.Item
            {...formItemLayout}
            required
            label="E-mail"
            extra="We won't send you spam, don't worry."
          >
            {getFieldDecorator('email', {
                validateTrigger: 'onBlur',
                rules: [{
                  type: 'email', message: 'Invalid e-mail.',
                }, {
                  required: true, message: 'E-mail is required.',
                }],
              })(
                <Input placeholder="Email" onChange={console.log} />
            )}
          </Form.Item>

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
              })(
                <Input placeholder="Full name" onChange={console.log} />
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
                <Input placeholder="Street address" onChange={console.log} />
            )}

            {getFieldDecorator('addressExtra')(
              <Input
                placeholder="Apartment / Floor / PO Box"
                className="CheckoutPanel__input--short"
                onChange={console.log}
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
              <Input placeholder="City / Town" onChange={console.log} />
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
                placeholder="ZIP / Postal code"
                className="CheckoutPanel__input--short"
                onChange={console.log}
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
                size="large"
                className="CountrySelect__search"
                showSearch
                placeholder="Enter a country"
                optionFilterProp="children"
                onChange={this._onChange}
                filterOption={selectFilterFunc}
              >
                {
                  _.map(sortedCountries, (item) =>
                    <Select.Option key={item.code} value={item.code}>{item.name}</Select.Option>
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
                placeholder="State"
                className="CheckoutPanel__input--short"
                onChange={console.log}
              />
            )}
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Phone number"
            extra="In case needed by postal service."
          >
            {getFieldDecorator('phone')(
              <Input placeholder="Phone number" onChange={console.log} />
            )}
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label=""
          >
            {getFieldDecorator('subscription', {
              valuePropName: 'checked',
            })(
              <Checkbox>Use a different address for billing</Checkbox>
            )}
          </Form.Item>
        </Form>
      </div>
    );
  },

  _onSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
}));

export default CheckoutPanel;
