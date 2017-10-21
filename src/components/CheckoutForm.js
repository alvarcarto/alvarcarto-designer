import React from 'react';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Modal, Form, Icon, Checkbox, Tooltip, Button, Radio } from 'antd';
import countries from 'i18n-iso-countries';
import { calculateCartPrice } from 'alvarcarto-price-util';
import EmailForm from './EmailForm';
import AddressForm from './AddressForm';
import PosterPreview from './PosterPreview';
import { Carousel } from 'react-responsive-carousel';
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
    if (this.props.initialState) {
      return _.merge({}, this.props.initialState, {
        // Revalidate all when loading initial state
        validateAll: true,
      });
    }

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
    const formItemLayout = {
      labelCol: { span: 24, sm: { span: 7 }, md: { span: 7 }, lg: { span: 7 } },
      wrapperCol: { span: 24, sm: { span: 14 }, md: { span: 14 }, lg: { span: 14 } },
    };

    const {
      emailSubscription,
      termsAccepted,
    } = this.state.values;

    const { cart } = this.props;
    const isFreeOrder = this._isFreeOrder();

    const formErrors = this._getFormErrors();
    return (
      <div className="CheckoutForm">
        <Form onSubmit={this._onSubmit}>
          <section className="CheckoutForm__section">
            <h2 className="CheckoutForm__form-header">
              1. Shipping details
            </h2>

            <EmailForm
              initialState={this.state.emailForm}
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
              initialState={this.state.shippingAddressForm}
              validate={this.state.validateAll}
              onChange={this._onShippingAddressFormChange}
            />
          </section>

          <section className="CheckoutForm__section">
            <h2 className="CheckoutForm__form-header">
              2. Shipping method
            </h2>

            <ShippingMethodForm />
          </section>

          { isFreeOrder ? null : this._renderPaymentDetailsSection(formItemLayout) }

          <section className="CheckoutForm__section CheckoutForm__section--last">
            <h2 className="CheckoutForm__form-header">
              { isFreeOrder ? '3' : '4'}. Review &amp; Order
            </h2>

            <div className="CheckoutForm__preview">
              <p>
                Review your design{cart.length > 1 ? 's' : ''} for typos or mistakes.
              </p>

              <Carousel
                className="CheckoutForm__preview-carousel noselect"
                showThumbs={false}
                showStatus={false}
                showIndicators={cart.length > 1}
              >
                {_.map(cart, (item, i) => {
                  return <div key={i}><PosterPreview mapItem={cart[i]} /></div>;
                })}
              </Carousel>
            </div>

            {
              isFreeOrder
                ? <div className="CheckoutForm__info">
                    <Icon type="gift" />
                    <p>
                      Your order is free of charge! Please ensure that your information is filled out correctly.
                      When clicking Complete order, your one-time gift code or promotion will be
                      used.
                    </p>
                  </div>
                : <div className="CheckoutForm__info">
                    <Icon type="solution" />
                    <p>
                      Please ensure that your information is filled out correctly.
                      When clicking Complete order, your account will be charged via
                      a secure <a target="_blank" href="https://stripe.com">Stripe</a> payment.
                    </p>
                  </div>
            }

            <Form.Item
              {...formErrors.termsAccepted}
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 22 }}
              className="CheckoutForm__terms"
              label="&nbsp;"
            >
              <Checkbox
                name="termsAccepted"
                defaultChecked={termsAccepted}
                onChange={this._onCheckboxChange}
                onBlur={this._onCheckboxBlur}
              >
                I accept the <a target="_blank" href="http://alvarcarto.com/tos">terms of service</a>
              </Checkbox>
            </Form.Item>

            <Button
              className={this.state.invalidSubmit
                ? 'CheckoutForm__complete-button shake animated'
                : 'CheckoutForm__complete-button'
              }
              type="primary"
              size="large"
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

  _renderPaymentDetailsSection(formItemLayout) {
    const { differentBillingAddress } = this.state.values;

    return <section className="CheckoutForm__section">
      <h2 className="CheckoutForm__form-header">
        3. Payment details
      </h2>

      <CreditCardForm
        validate={this.state.validateAll}
        onChange={this._onCreditCardFormChange}
      />

      <Form.Item {...formItemLayout} className="CheckoutForm__new-address" label="Billing address" required>
        <Radio.Group
          name="differentBillingAddress"
          defaultValue={differentBillingAddress ? 'different' : 'same'}
          onChange={this._onDifferentBillingAddressChange}
        >
          <Radio className="CheckoutForm__new-address-same-option" value="same">
            Same as shipping address
            <span className="CheckoutForm__new-address-text">
              {this._getShippingAddressAsText(this.state.shippingAddressForm)}
            </span>
          </Radio>
          <Radio value="different">Use a different billing address</Radio>
        </Radio.Group>
      </Form.Item>

      <ReactCSSTransitionGroup
        transitionName="popin"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={300}
      >
        {
          !differentBillingAddress
            ? null
            : <AddressForm
                disablePhone
                disableName
                initialState={this.state.billingAddressForm}
                validate={this.state.validateAll}
                onChange={this._onBillingAddressFormChange}
              />
        }
      </ReactCSSTransitionGroup>

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
            <h4>TLS Secured Payments</h4>
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
    </section>
  },

  _isFreeOrder() {
    const { cart, promotion } = this.props;
    const totalPrice = calculateCartPrice(cart, { promotion, ignorePromotionExpiry: true });
    const isFreeOrder = totalPrice.value <= 0;
    return isFreeOrder;
  },

  _getShippingAddressAsText(shippingAddressForm) {
    if (!shippingAddressForm || !shippingAddressForm.isValid || !shippingAddressForm.values) {
      return 'Fill in your shipping details';
    }

    const values = shippingAddressForm.values;

    const streetAddressLabel = `${values.streetAddress} ${_.get(values, 'streetAddressExtra', '')}`;
    const cityLabel = `${values.postalCode} ${values.city}`;
    const countryLabel = `${countries.getName(values.countryCode, 'en')} ${_.get(values, 'state', '')}`;

    return <span>
      {streetAddressLabel}<br/>
      {cityLabel}<br/>
      {countryLabel}
    </span>;
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

    const isFreeOrder = this._isFreeOrder();
    const requiredKeys = isFreeOrder
      ? ['emailForm', 'shippingAddressForm']
      : ['emailForm', 'shippingAddressForm', 'creditCardForm'];

    const requiredFormsAreValid = _.every(requiredKeys, (key) => _.get(this.state[key], 'isValid') === true);

    let isBillingAddressOk = false;
    if (isFreeOrder) {
      isBillingAddressOk = true;
    } else {
      isBillingAddressOk = this.state.values.differentBillingAddress
        ? _.get(this.state.billingAddressForm, 'isValid') === true
        : true;
    }

    return requiredFormsAreValid && isBillingAddressOk;
  },

  _onDifferentBillingAddressChange(e) {
    const { value } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        differentBillingAddress: value === 'different',
      }),
    }), this._onAnyChange);
  },

  _onCheckboxChange(e) {
    const { name, checked } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: checked
      }),
    }), this._onAnyChange);
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
    this.setState((state) => ({ emailForm: form }), this._onAnyChange);
  },

  _onShippingAddressFormChange(form) {
    this.setState((state) => ({ shippingAddressForm: form }), this._onAnyChange);
  },

  _onBillingAddressFormChange(form) {
    this.setState((state) => ({ billingAddressForm: form }), this._onAnyChange);
  },

  _onCreditCardFormChange(form) {
    this.setState((state) => ({ creditCardForm: form }), this._onAnyChange);
  },

  _onMoreSecurityClick(e) {
    e.preventDefault();

    Modal.info({
      title: 'Your payments are secured',
      iconType: 'lock',
      onCancel: () => null,  // To prevent expection
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
      stripeElement: _.get(state.creditCardForm, 'element'),
      creditCardPersonName: _.get(state.creditCardForm, 'values.nameOnCard'),
      differentBillingAddress: _.get(state, 'values.differentBillingAddress'),
      shippingAddress: _.get(state.shippingAddressForm, 'values'),
      billingAddress: _.get(state.billingAddressForm, 'values'),
    };

    this.props.onSubmit(orderForm);
  },

  _onAnyChange() {
    if (this.props.onChange) {
      const stateCopy = _.cloneDeep(this.state);
      // Make sure user has to accept terms before confirming order
      _.set(stateCopy, 'values.termsAccepted', false);
      this.props.onChange(stateCopy);
    }
  }
});

export default CheckoutForm;
