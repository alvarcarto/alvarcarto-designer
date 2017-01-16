import React from 'react';
import _ from 'lodash';
import { Form, Input, Icon, Checkbox, Select, Radio } from 'antd';
const { TruckIcon } = require('../util/svg');
import AddressForm from './CustomAddressForm';
import './CheckoutPanel.css';

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

          <h4 className="CheckoutPanel__form-header">
            Shipping details
          </h4>

          <AddressForm onChange={console.log} />

          <Form.Item
            {...formItemLayout}
            label=""
          >
            {getFieldDecorator('differentBilling', {
              valuePropName: 'checked',
            })(
              <Checkbox>Use a different address for billing</Checkbox>
            )}
          </Form.Item>

          <h4 className="CheckoutPanel__form-header">
            Shipping method
          </h4>

          <Form.Item
            {...formItemLayout}
            extra="On average delivered in 8 workdays"
          >
            {getFieldDecorator('shippingMethod', {
              valuePropName: 'checked',
            })(
              <Radio.Group value="free">
                <Radio value="free">Free international shipping</Radio>
              </Radio.Group>
            )}
          </Form.Item>

          <h4 className="CheckoutPanel__form-header">
            Payment details
          </h4>

          <Form.Item
            {...formItemLayout}
            label="Card holder name"
          >
            {getFieldDecorator('creditCardName')(
              <Input placeholder="Card holder name" onChange={console.log} />
            )}
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Credit card"
          >
            {getFieldDecorator('creditCard')(
              <Input placeholder="Credit card" onChange={console.log} />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Expires"
          >
            {getFieldDecorator('expires')(
              <Input placeholder="In format 05/17" onChange={console.log} />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="CVC"
            extra="Back on your credit card"
          >
            {getFieldDecorator('cvc')(
              <Input placeholder="CVC" onChange={console.log} />
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
