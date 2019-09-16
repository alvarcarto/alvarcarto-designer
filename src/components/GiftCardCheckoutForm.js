import React from 'react';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Form, Icon, Checkbox, Tooltip, Button, Radio } from 'antd';
import countries from 'i18n-iso-countries';
import EmailForm from './EmailForm';
import AddressForm from './AddressForm';
import GiftCardCustomizeForm from './GiftCardCustomizeForm';
import CreditCardForm from './CreditCardForm';
import FinalOrderSummary from './FinalOrderSummary';

const form = {
  differentBillingAddress: () => null,
  emailSubscription: () => null,
  termsAccepted: (val) => {
    if (!val) {
      return new Error('You must accept the terms of service.');
    }
  }
};

class GiftCardCheckoutForm extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    if (props.initialState) {
      this.state = _.merge({}, props.initialState, {
        // Revalidate all when loading initial state
        validateAll: true,
      });

      return;
    }

    this.state = {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.extend(_.mapValues(form, () => null), {
        emailSubscription: false,
        differentBillingAddress: true,
      }),
      shouldValidate: _.mapValues(form, () => false),
      validateAll: false,
      giftCardCustomizeForm: {
        isValid: true,
        values: {
          giftCardType: 'digital',
        },
      },
      emailForm: null,
      shippingAddressForm: null,
      billingAddressForm: null,
      creditCardForm: null,
    };
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 24, sm: { span: 7 }, md: { span: 7 }, lg: { span: 7 } },
      wrapperCol: { span: 24, sm: { span: 14 }, md: { span: 14 }, lg: { span: 14 } },
    };

    const { cart } = this.props;
    const {
      emailSubscription,
      termsAccepted,
    } = this.state.values;
    const giftCardType = this._getGiftCardType();
    const formErrors = this._getFormErrors();

    return (
      <div className="GiftCardCheckoutForm">
        <Form onSubmit={this._onSubmit}>
          <section className="GiftCardCheckoutForm__section">
            <h2 className="GiftCardCheckoutForm__form-header">
              1. Gift card
            </h2>

            <GiftCardCustomizeForm
              initialState={this.state.giftCardCustomizeForm}
              onChange={this._onGiftCardCardFormChange}
            />
          </section>

          <section className="GiftCardCheckoutForm__section">
            <h2 className="GiftCardCheckoutForm__form-header">
              2. Delivery details
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
                title="We only email when there's something to say, no weekly spamming."
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

            <ReactCSSTransitionGroup
              transitionName="popin"
              transitionEnterTimeout={400}
              transitionLeaveTimeout={300}
            >
              {
                giftCardType === 'physical'
                  ? <AddressForm
                      initialState={this.state.shippingAddressForm}
                      validate={this.state.validateAll}
                      onChange={this._onShippingAddressFormChange}
                    />
                  : null
              }
            </ReactCSSTransitionGroup>
          </section>

          { this._renderPaymentDetailsSection(formItemLayout) }

          <section className="GiftCardCheckoutForm__section GiftCardCheckoutForm__section--last">
            <h2 className="CheckoutForm__form-header">
              4. Review &amp; Order
            </h2>

            <FinalOrderSummary cart={cart} />

            <div className="GiftCardCheckoutForm__info">
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
              className="GiftCardCheckoutForm__terms"
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
              data-iframe-height
              className={this.state.invalidSubmit
                ? 'GiftCardCheckoutForm__complete-button shake animated'
                : 'GiftCardCheckoutForm__complete-button'
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
  }

  _renderPaymentDetailsSection = (formItemLayout) => {
    const { differentBillingAddress } = this.state.values;

    return <section className="GiftCardCheckoutForm__section">
      <h2 className="GiftCardCheckoutForm__form-header">
        3. Payment details
      </h2>

      <CreditCardForm
        validate={this.state.validateAll}
        onChange={this._onCreditCardFormChange}
      />

      <ReactCSSTransitionGroup
        transitionName="popin"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={300}
      >
        {
          this._getGiftCardType() === 'physical'
            ? <Form.Item {...formItemLayout} className="GiftCardCheckoutForm__new-address" label="Billing address" required>
                <Radio.Group
                  name="differentBillingAddress"
                  defaultValue={differentBillingAddress ? 'different' : 'same'}
                  onChange={this._onDifferentBillingAddressChange}
                >
                  <Radio className="GiftCardCheckoutForm__new-address-same-option" value="same">
                    Same as shipping address
                    <span className="GiftCardCheckoutForm__new-address-text">
                      {this._getShippingAddressAsText(this.state.shippingAddressForm)}
                    </span>
                  </Radio>
                  <Radio value="different">Use a different billing address</Radio>
                </Radio.Group>
              </Form.Item>
            : null
        }
      </ReactCSSTransitionGroup>

      <ReactCSSTransitionGroup
        transitionName="popin"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={300}
      >
        {
          differentBillingAddress || this._getGiftCardType() === 'digital'
            ? <AddressForm
                disablePhone
                disableName
                initialState={this.state.billingAddressForm}
                validate={this.state.validateAll}
                onChange={this._onBillingAddressFormChange}
              />
            : null
        }
      </ReactCSSTransitionGroup>

      <ul className="GiftCardCheckoutForm__badge-list">
        <li>
          <div className="GiftCardCheckoutForm__badge">
            <Icon type="credit-card" />
            <h4>Trusted Gateway</h4>
          </div>
        </li>
        <li>
          <div className="GiftCardCheckoutForm__badge">
            <Icon type="lock" />
            <h4>TLS Secured Payments</h4>
          </div>
        </li>
        <li>
          <div className="GiftCardCheckoutForm__badge">
            <Icon type="hdd" />
            <h4>Privacy first</h4>
          </div>
        </li>
      </ul>
    </section>
  };

  _getShippingAddressAsText = (shippingAddressForm) => {
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
  };

  _getGiftCardType = () => {
    return _.get(this.state, 'giftCardCustomizeForm.values.giftCardType');
  };

  _getFormErrors = (validateAll) => {
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
  };

  _hasFormErrors = () => {
    const errs = this._getFormErrors(true);
    return _.keys(errs).length > 0;
  };

  _canSubmit = () => {
    if (this._hasFormErrors()) {
      return false;
    }

    const requiredKeys = this._getGiftCardType() === 'physical'
      ? ['emailForm', 'shippingAddressForm', 'creditCardForm']
      : ['emailForm', 'billingAddressForm', 'creditCardForm'];
    const requiredFormsAreValid = _.every(requiredKeys, (key) => _.get(this.state[key], 'isValid') === true);

    const isBillingAddressOk = this.state.values.differentBillingAddress
      ? _.get(this.state.billingAddressForm, 'isValid') === true
      : true;

    return requiredFormsAreValid && isBillingAddressOk;
  };

  _onDifferentBillingAddressChange = (e) => {
    const { value } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        differentBillingAddress: value === 'different',
      }),
    }), this._onAnyChange);
  };

  _onCheckboxChange = (e) => {
    const { name, checked } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: checked
      }),
    }), this._onAnyChange);
  };

  _onCheckboxBlur = (e) => {
    const { name } = e.target;

    this.setState((state) => ({
      shouldValidate: _.extend(state.shouldValidate, {
        [name]: true
      }),
    }));
  };

  _onGiftCardCardFormChange = (form) => {
    const newState = { giftCardCustomizeForm: form };
    if (form.values.giftCardType === 'digital') {
      // As a side-effect when user selects digital gift card,
      // user has to input billing address
      newState.values = { differentBillingAddress: true };
    }
    this.setState((state) => newState, this._onAnyChange);
  };

  _onEmailFormChange = (form) => {
    this.setState((state) => ({ emailForm: form }), this._onAnyChange);
  };

  _onShippingAddressFormChange = (form) => {
    this.setState((state) => ({ shippingAddressForm: form }), this._onAnyChange);
  };

  _onBillingAddressFormChange = (form) => {
    this.setState((state) => ({ billingAddressForm: form }), this._onAnyChange);
  };

  _onCreditCardFormChange = (form) => {
    this.setState((state) => ({ creditCardForm: form }), this._onAnyChange);
  };

  _onSubmit = (e) => {
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
  };

  _onAnyChange = () => {
    if (this.props.onChange) {
      const stateCopy = _.cloneDeep(this.state);
      // Make sure user has to accept terms before confirming order
      _.set(stateCopy, 'values.termsAccepted', false);
      this.props.onChange(stateCopy);
    }
  };
}

export default GiftCardCheckoutForm;
