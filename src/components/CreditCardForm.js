/* global Stripe */

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Payment from 'payment';
import { Form, Input, Select, Row, Col, Icon } from 'antd';
import config from '../config';
import './CreditCardForm.css';

const ACCEPTED_CARD_TYPES = [
  'Visa',
  'MasterCard',
  'American Express',
];

const form = {
  'cc-name': (val) => {
    if (_.isEmpty(val)) {
      return new Error('Card holder name is required.');
    }
  },
  'cc-number': (val) => {
    if (_.isEmpty(val)) {
      return new Error('Credit card number is required.');
    }

    if (!Stripe.card.validateCardNumber(val)) {
      return new Error('Invalid credit card number.')
    }

    const type = Stripe.card.cardType(val);
    if (!_.includes(ACCEPTED_CARD_TYPES, type)) {
      return new Error(`
        Unfortunately we don't accept ${type} card at the moment.
        We accept ${ACCEPTED_CARD_TYPES.join(', ')}.`);
    }
  },
  'cc-exp': (val) => {
    if (_.isEmpty(val) || !_.isFinite(val.month) || !_.isFinite(val.year)) {
      return new Error('Expiry date is required.');
    }

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    if (val.year <= currentYear && val.month < currentMonth) {
      return new Error('Expiry date should not be in the past.');
    }
  },
  'cc-cvc': (val) => {
    if (_.isEmpty(val)) {
      return new Error('CVC is required.');
    }

    if (!Stripe.card.validateCVC(val)) {
      return new Error('Invalid CVC.');
    }
  },
};

const CreditCardForm = React.createClass({
  getInitialState() {
    return {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.mapValues(form, () => null),
      shouldValidate: _.mapValues(form, () => false),
    };
  },

  componentDidMount() {
    Payment.formatCardNumber(ReactDOM.findDOMNode(this.refs['cc-number']));
  },

  render() {
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
    };

    const yearNow = new Date().getFullYear();
    const formErrors = this._getFormErrors();
    const cardType = _.isNull(this.state.values['cc-number'])
      ? 'Unknown'
      : Stripe.card.cardType(this.state.values['cc-number']);

    return (
      <div className="CreditCardForm">
        <Form.Item {...formErrors['cc-name']} {...formItemLayout} required label="Name on card">
          <Input name="cc-name" onBlur={this._onInputBlur} onChange={this._onInputChange} placeholder="Full name" />
        </Form.Item>

        <Form.Item {...formErrors['cc-number']} {...formItemLayout} required label="Card number">
          <Input
            ref="cc-number"
            suffix={<Icon type="lock" />}
            maxLength="20"
            name="cc-number"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="•••• •••• •••• ••••"
            pattern="\d*"
            autoComplete="cc-number"
            className="CreditCardForm__number"
          />
        </Form.Item>

        <Form.Item
          {...formErrors['cc-exp']}
          {...formItemLayout}
          required
          label="Expiry date"
          className="CreditCardForm__expiry-date"
        >
          <Select
            size="large"
            placeholder="MM"
            className="CreditCardForm__expiry-month"
            onChange={this._onMonthChange}
          >
            {
              _.map(_.range(1, 13), (month) =>
                <Select.Option key={month} value={String(month)}>
                  {_.padStart(month, 2, '0')}
                </Select.Option>
              )
            }
          </Select>
          <span className="CreditCardForm__expiry-separator">/</span>
          <Select
            size="large"
            placeholder="YYYY"
            className="CreditCardForm__expiry-year"
            onChange={this._onYearChange}
          >
            {
              _.map(_.range(yearNow, yearNow + 16), (year) =>
                <Select.Option key={year} value={String(year)}>
                  {year}
                </Select.Option>
              )
            }
          </Select>
        </Form.Item>

        <Form.Item {...formErrors['cc-cvc']} {...formItemLayout} required
          label="CVC"
        >
          <Input
            maxLength="4"
            name="cc-cvc"
            autoComplete="off"
            pattern="\d*"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="CVC"
            className="CreditCardForm__cvc input--short"
          />
        </Form.Item>

        <Row>
          <Col span={formItemLayout.labelCol.span}></Col>
          <Col span={formItemLayout.wrapperCol.span}>
            <ul className="CreditCardForm__logos">
              <li className={cardType === 'Visa' ? 'CreditCardForm__logo--highlight' : ''}>
                <img
                  src={`${config.PUBLIC_URL}/assets/card-logo-visa.svg`}
                  alt="Visa"
                />
              </li>
              <li className={cardType === 'MasterCard' ? 'CreditCardForm__logo--highlight' : ''}>
                <img
                  src={`${config.PUBLIC_URL}/assets/card-logo-mastercard.svg`}
                  alt="MasterCard"
                />
              </li>
              <li className={cardType === 'American Express' ? 'CreditCardForm__logo--highlight' : ''}>
                <img
                  src={`${config.PUBLIC_URL}/assets/card-logo-amex.svg`}
                  alt="American Express"
                />
              </li>
            </ul>
          </Col>
        </Row>
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
    this._setValue(name, value);
    this._setShouldValidate(name, false);
  },

  _onInputBlur(e) {
    const { name } = e.target;
    if (name === 'cc-cvc') {
      this._setShouldValidate('cc-exp', true);
    }

    this._setShouldValidate(name, true);
  },

  _onMonthChange(_value) {
    const value = Number(_value);

    this.setState((state) => ({
      values: _.extend(state.values, {
        'cc-exp': _.extend(state.values['cc-exp'], {
          month: value,
        }),
      }),
    }), this._emitOnChange);

    this._removeExpiryValidate('month', value);
  },

  _onYearChange(_value) {
    const value = Number(_value);

    this.setState((state) => ({
      values: _.extend(state.values, {
        'cc-exp': _.extend(state.values['cc-exp'], {
          year: value,
        }),
      }),
    }), this._emitOnChange);

    this._removeExpiryValidate('year', value);
  },

  _removeExpiryValidate(name, newVal) {
    const newExp = _.merge({}, this.state.values['cc-exp'], {
      [name]: newVal
    });
    const err = form['cc-exp'](newExp);

    if (!_.isError(err)) {
      this._setShouldValidate('cc-exp', false);
    }
  },

  _setValue(name, val) {
    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: val
      }),
    }), this._emitOnChange);
  },

  _setShouldValidate(name, val) {
    this.setState((state) => ({
      shouldValidate: _.extend(state.shouldValidate, {
        [name]: val
      }),
    }));
  },

  _emitOnChange() {
    // TODO: Add form validation here
    this.props.onChange({
      isValid: false,
      values: this.state.values,
    });
  }
});

export default CreditCardForm;
