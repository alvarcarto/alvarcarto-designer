/* global Stripe */

import React from 'react';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Modal, Form, Input, Icon, Checkbox, Select, Radio, Tooltip, Button } from 'antd';
import EmailForm from './EmailForm';
import AddressForm from './AddressForm';
import ShippingMethodForm from './ShippingMethodForm';
import CreditCardForm from './CreditCardForm';

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
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.extend(_.mapValues(form, () => null), {
        emailSubscription: true,
      }),
      shouldValidate: _.mapValues(form, () => false),
      validateAll: false,
      emailForm: null,
      shippingAddressForm: null,
      billingAddressForm: null,
      creditCardForm: null,
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
            <h2 className="CheckoutForm__form-header">
              {getIndex()}. Shipping details
            </h2>

            <EmailForm
              validate={this.state.validateAll}
              onChange={this._onEmailFormChange}
            />

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

            <AddressForm
              validate={this.state.validateAll}
              onChange={this._onShippingAddressFormChange}
            />

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
                    <h2 className="CheckoutForm__form-header">
                      {getIndex()}. Billing address
                    </h2>
                    <AddressForm
                      disablePhone
                      validate={this.state.validateAll}
                      onChange={this._onBillingAddressFormChange}
                    />
                  </section>
            }
          </ReactCSSTransitionGroup>

          <section className="CheckoutForm__section">
            <h2 className="CheckoutForm__form-header">
              {getIndex()}. Shipping method
            </h2>

            <ShippingMethodForm />
          </section>

          <section className="CheckoutForm__section CheckoutForm__section--last">
            <h2 className="CheckoutForm__form-header">
              {getIndex()}. Payment details
            </h2>

            <CreditCardForm
              validate={this.state.validateAll}
              onChange={this._onCreditCardFormChange}
            />

            <ul className="CheckoutForm__badge-list">
              <li>
                <div className="CheckoutForm__badge">
                  <Icon type="credit-card" />
                  <h4>Trusted Gateway</h4>
                </div>
              </li>
              <li>
                <div className="CheckoutForm__badge">
                  <Icon type="lock" />
                  <h4>TSL Secured Payments</h4>
                </div>
              </li>
              <li>
                <div className="CheckoutForm__badge">
                  <Icon type="hdd" />
                  <h4>Privacy first</h4>
                </div>
              </li>
            </ul>

            <div className="CheckoutForm__sec-info">
              <a onClick={this._onMoreSecurityClick} href="#">Security details</a>
            </div>

            <div className="CheckoutForm__info">
              <Icon type="solution" />
              <p>
                Please ensure that your information is filled out correctly.
                When clicking Complete order, your account will be charged via
                a secure <a target="_blank" href="https://stripe.com">Stripe</a> payment.
              </p>
            </div>

            <Form.Item
              {...formErrors.termsAccepted}
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 22 }}
              className="CheckoutForm__terms"
              label="&nbsp;"
            >
              <Checkbox name="termsAccepted" onChange={this._onCheckboxChange} onBlur={this._onCheckboxBlur}>
                I accept the <a target="_blank" href="http://alvarcarto.com/tos">terms of service</a>
              </Checkbox>
            </Form.Item>

            <Button
              className={this.state.invalidSubmit
                ? 'CheckoutForm__complete-button shake animated'
                : 'CheckoutForm__complete-button'
              }
              type="primary"
              htmlType="submit"
            >
              <Icon type="shopping-cart" />
              Complete order
            </Button>
          </section>
        </Form>
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

  _hasFormErrors() {
    const errs = this._getFormErrors(true);
    return _.keys(errs).length > 0;
  },

  _canSubmit() {
    if (this._hasFormErrors()) {
      return false;
    }

    const keys = ['emailForm', 'shippingAddressForm', 'creditCardForm'];
    const requiredFormsAreValid = _.every(keys, (key) => _.get(this.state[key], 'isValid') === true);

    const isBillingAddressOk = this.state.values.differentBillingAddress
      ? _.get(this.state.billingAddressForm, 'isValid') === true
      : true;

    return requiredFormsAreValid && isBillingAddressOk;
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
  },

  _onEmailFormChange(form) {
    this.setState((state) => ({ emailForm: form }));
  },

  _onShippingAddressFormChange(form) {
    this.setState((state) => ({ shippingAddressForm: form }));
  },

  _onBillingAddressFormChange(form) {
    this.setState((state) => ({ billingAddressForm: form }));
  },

  _onCreditCardFormChange(form) {
    this.setState((state) => ({ creditCardForm: form }));
  },

  _onMoreSecurityClick(e) {
    e.preventDefault();

    Modal.info({
      title: 'Your payments are secured',
      iconType: 'lock',
      content: (
        <div>
          <p>
            Alvar Carto is using <a target="_blank" href="https://stripe.com">Stripe </a>
            to securely handle your payments.
            Stripe <a target="_blank" href="https://stripe.com/docs/security/stripe"> is certified </a>
            to PCI Service Provider Level 1, which is the
            most stringent level of certification available.
          </p>
          <p>
            Full credit card information is only sent to Stripe servers.
            We only see the last 4 digits and the expiration date of your credit card.
          </p>
        </div>
      ),
    });
  },

  _onSubmit(e) {
    e.preventDefault();

    if (!this._canSubmit()) {
      this.setState((state) => ({
        shouldValidate: _.mapValues(form, () => true),
        validateAll: true,
        invalidSubmit: true,
      }));

      setTimeout(() =>
        this.setState((state) => ({ invalidSubmit: false })),
        1400,
      );

      return;
    }

    const { state } = this;
    const orderForm = {
      email: _.get(state.emailForm, 'values.email'),
      emailSubscription: state.values.emailSubscription,
      creditCard: _.get(state.creditCardForm, 'values'),
      shippingAddress: _.get(state.shippingAddressForm, 'values'),
      billingAddress: _.get(state.billingAddressForm, 'values'),
    };

    this.props.onSubmit(orderForm);
  }
});

export default CheckoutForm;
