import React from 'react';
import _ from 'lodash';
import { Form, Input, Radio } from 'antd';

const form = {
  giftCardType: (val) => null,
};

const GiftCardCustomizeForm = React.createClass({
  getInitialState() {
    let state = {
      // Take all keys in form object and initialize their values
      // with null and false
      values: _.mapValues(form, () => null),
    };

    if (this.props.initialState) {
      state.values = this.props.initialState.values;
    }

    return state;
  },

  render() {
    const formItemLayout = {
      labelCol: { span: 24, sm: { span: 7 }, md: { span: 7 }, lg: { span: 7 } },
      wrapperCol: { span: 24, sm: { span: 14 }, md: { span: 14 }, lg: { span: 14 } },
    };

    return (
      <div className="GiftCardCustomizeForm">
        <Form.Item {...formItemLayout} label="&nbsp;">
          <Radio.Group
            onChange={this._onInputChange}
            value={_.get(this.state.values, 'giftCardType')}
          >
            <Radio value={1}>Digital gift card sent to your email address</Radio>
            <Radio value={2}>Physical gift card posted in a premium letter (+6.90€)</Radio>
          </Radio.Group>


        </Form.Item>
      </div>
    );
  },

  _onInputChange(e) {
    const { name, value } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        [name]: value
      }),
    }), this._emitOnChange);
  },

  _emitOnChange() {
    const isValid = !this._hasFormErrors();

    this.props.onChange({
      isValid,
      values: this.state.values,
    });
  },
});

export default GiftCardCustomizeForm;
