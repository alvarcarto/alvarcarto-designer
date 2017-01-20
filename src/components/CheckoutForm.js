import React from 'react';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Form, Input, Icon, Checkbox, Select, Radio, Tooltip, Button } from 'antd';
import EmailForm from './EmailForm';
import AddressForm from './AddressForm';
import ShippingMethodForm from './ShippingMethodForm';
import CreditCardForm from './CreditCardForm';
import './CheckoutForm.css';

const form = {
  differentBillingAddress: () => null,
  emailSubscription: () => null,
  termsAccepted: (val) => {
    if (!val) {
      return new Error('You must accept the terms of service.');
    }
  }
};

const CheckoutForm = React.createClass({
  getInitialState() {
    return {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.extend(_.mapValues(form, () => null), {
        emailSubscription: true,
      }),
      shouldValidate: _.mapValues(form, () => false),
    };
  },

  render() {
    const { globalState } = this.props;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
    };

    let i = 0;
    const getIndex = () => ++i;

    const { emailSubscription } = this.state.values;
    const formErrors = this._getFormErrors();
    return (
      <div className="CheckoutForm">
        <Form onSubmit={this._onSubmit}>
          <section className="CheckoutForm__section">
            <h3 className="CheckoutForm__form-header">
              {getIndex()}. Shipping details
            </h3>

            <EmailForm onChange={console.log} />

            <Form.Item {...formItemLayout} label="&nbsp;">
              <Tooltip
                placement="topLeft"
                overlayClassName={emailSubscription ? 'ant-tooltip-hidden' : ''}
                title="We respect your decision."
              >
                <Checkbox
                  defaultChecked={emailSubscription}
                  name="emailSubscription"
                  onChange={this._onCheckboxChange}
                >

                    Subscribe me to exclusive offers
                </Checkbox>
              </Tooltip>
            </Form.Item>

            <AddressForm onChange={console.log} />

            <Form.Item className="CheckoutForm__new-address" {...formItemLayout} label="&nbsp;">
              <Checkbox name="differentBillingAddress" onChange={this._onCheckboxChange}>
                Use a different address for billing
              </Checkbox>
            </Form.Item>
          </section>

          <ReactCSSTransitionGroup
            transitionName="popin"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={300}
          >
            {
              !this.state.values.differentBillingAddress
                ? null
                : <section className="CheckoutForm__section">
                    <h3 className="CheckoutForm__form-header">
                      {getIndex()}. Billing address
                    </h3>
                    <AddressForm onChange={console.log} />
                  </section>
            }
          </ReactCSSTransitionGroup>

          <section className="CheckoutForm__section">
            <h3 className="CheckoutForm__form-header">
              {getIndex()}. Shipping method
            </h3>

            <ShippingMethodForm onChange={console.log} />
          </section>

          <section className="CheckoutForm__section CheckoutForm__section--last">
            <h3 className="CheckoutForm__form-header">
              {getIndex()}. Payment details
            </h3>

            <CreditCardForm onChange={console.log} />

            <Checkbox className="CheckoutForm__terms" name="termsAccepted" onChange={this._onCheckboxChange}>
              I accept the <a target="_blank" href="http://alvarcarto.com/tos">terms of service</a>
            </Checkbox>

            <Button className="CheckoutForm__complete-button" type="primary">
              <Icon type="shopping-cart" />
              Complete order
            </Button>
          </section>
        </Form>
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

  _onCheckboxChange(e) {
    const { name, checked } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: checked
      }),
    }));
  },

  _onCheckboxBlur(e) {
    const { name } = e.target;

    this.setState((state) => ({
      shouldValidate: _.extend(state.shouldValidate, {
        [name]: true
      }),
    }));
  }
});

export default CheckoutForm;
