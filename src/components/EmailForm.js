import React from 'react';
import _ from 'lodash';
import { Form, Input } from 'antd';

const form = {
  email: (val) => {
    if (_.isEmpty(val)) {
      return new Error('E-mail is required.');
    }

    if (!val.match(/.+@.+\..+/)) {
      return new Error('Invalid e-mail. Must be in format "name@domain.com".');
    }
  },
};

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.mapValues(form, () => null),
      shouldValidate: _.mapValues(form, () => false),
    };

    if (props.initialState) {
      this.state.values = props.initialState.values;
    }
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 24, sm: { span: 7 }, md: { span: 7 }, lg: { span: 7 } },
      wrapperCol: { span: 24, sm: { span: 14 }, md: { span: 14 }, lg: { span: 14 } },
    };

    const formErrors = this._getFormErrors(this.props.validate);
    return (
      <div className="EmailForm">
        <Form.Item
          {...formErrors.email}
          {...formItemLayout}
          required
          label="E-mail"
          extra="Receipt and order details will be sent to your email."
        >
          <Input
            name="email"
            type="email"
            defaultValue={_.get(this.state.values, 'email')}
            onBlur={this._onInputBlur}
            onChange={this._onInputChange}
            placeholder="E-mail"
          />
        </Form.Item>
      </div>
    );
  }

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

  _onInputChange = (e) => {
    const { name, value } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: value
      }),
    }), this._emitOnChange);
  };

  _emitOnChange = () => {
    const isValid = !this._hasFormErrors();

    this.props.onChange({
      isValid,
      values: this.state.values,
    });
  };

  _onInputBlur = (e) => {
    const { name } = e.target;

    this.setState((state) => ({
      shouldValidate: _.extend(state.shouldValidate, {
        [name]: true
      }),
    }));
  };
}

export default EmailForm;
