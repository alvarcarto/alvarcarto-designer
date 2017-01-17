import React from 'react';
import _ from 'lodash';
import { Form, Input, Icon, Checkbox, Tooltip } from 'antd';

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
  },
  'cc-exp': (val) => {
    if (_.isEmpty(val)) {
      return new Error('Expiry date is required.');
    }
  },
  'cc-cvc': (val) => {
    if (_.isEmpty(val)) {
      return new Error('CVC is required.');
    }
  },
};

const CreditCardForm = React.createClass({
  getInitialState() {
    return {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.mapValues(form, null),
      onBlurTriggered: _.mapValues(form, false),
    };
  },

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const formErrors = this._getFormErrors();
    return (
      <div className="CreditCardForm">
        <Form.Item {...formErrors.name} {...formItemLayout} required label="Name on card">
          <Input name="cc-name" onBlur={this._onInputBlur} onChange={this._onInputChange} placeholder="Full name" />
        </Form.Item>

        <Form.Item {...formErrors.name} {...formItemLayout} required label="Card number">
          <Input
            name="cc-number"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="•••• •••• •••• ••••"
            pattern="\d*"
            autoComplete="cc-number"
          />
        </Form.Item>

        <Form.Item {...formErrors.expiryDate} {...formItemLayout} required label="Expiry date">
          <Input
            name="cc-exp"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            pattern="\d*"
            autoComplete="cc-exp"
            placeholder="MM / YY"
            className="input--short"
          />
        </Form.Item>

        <Form.Item {...formErrors.cvc} {...formItemLayout} required
          label="CVC"
        >
          <Input
            name="cc-cvc"
            autoComplete="off"
            pattern="\d*"
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="CVC"
            className="input--short"
          />
        </Form.Item>
      </div>
    );
  },

  _getFormErrors() {
    const formErrors = {};
    _.forEach(this.state.values, (val, key) => {
      const hasBeenBlurred = this.state.onBlurTriggered[key];
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

    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: value
      }),
    }));
  },

  _onInputBlur(e) {
    const { name } = e.target;

    this.setState((state) => ({
      onBlurTriggered: _.extend(state.onBlurTriggered, {
        [name]: true
      }),
    }));
  }
});

export default CreditCardForm;
