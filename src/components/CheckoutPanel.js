import React from 'react';
import _ from 'lodash';
import { Form, Input, Icon, Checkbox, Select, Radio } from 'antd';
const { TruckIcon } = require('../util/svg');
import EmailForm from './EmailForm';
import AddressForm from './AddressForm';
import ShippingMethodForm from './ShippingMethodForm';
import CreditCardForm from './CreditCardForm';
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

          <EmailForm onChange={console.log} />

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

          <ShippingMethodForm onChange={console.log} />

          <h4 className="CheckoutPanel__form-header">
            Payment details
          </h4>

          <CreditCardForm onChange={console.log} />
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
