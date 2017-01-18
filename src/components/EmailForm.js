import React from 'react';
import _ from 'lodash';
import { Form, Input, Icon, Checkbox, Select, Radio } from 'antd';

const form = {
  email: (val) => {
    if (_.isEmpty(val)) {
      return new Error('E-mail is required.');
    }
  },
};

const EmailForm = React.createClass({
  getInitialState() {
    return {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.mapValues(form, () => null),
      shouldValidate: _.mapValues(form, () => false),
    };
  },

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const formErrors = this._getFormErrors();
    return (
      <div className="EmailForm">
        <Form.Item
          {...formErrors.email}
          {...formItemLayout}
          required
          label="E-mail"
          extra="Order confirmation will be sent to your email."
        >
          <Input name="email" onBlur={this._onInputBlur} onChange={this._onInputChange} placeholder="Email" />
        </Form.Item>
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

    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: value
      }),
    }));
  },

  _onInputBlur(e) {
    const { name } = e.target;

    this.setState((state) => ({
      shouldValidate: _.extend(state.shouldValidate, {
        [name]: true
      }),
    }));
  }
});

export default EmailForm;
