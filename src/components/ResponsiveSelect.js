import React from 'react';
import _ from 'lodash';
import { Select } from 'antd';
import MediaQuery from 'react-responsive';
import CONST from '../constants';

const ResponsiveSelect = React.createClass({
  getInitialState() {
    return {
      value: this.props.defaultValue || 'placeholder',
    };
  },

  render() {
    return <MediaQuery maxWidth={CONST.SCREEN_SM}>
      {(matches) => {
        if (matches) {
          return this._renderSelect();
        } else {
          return this._renderAntdSelect();
        }
      }}
    </MediaQuery>;
  },

  _renderSelect() {
    const props = this.props;
    const fullOpts = [{
      key: 'placeholder',
      value: 'placeholder',
      label: props.placeholder
    }].concat(props.options);

    let narrowClassName = props.className || '';
    if (this.state.value === 'placeholder') {
      narrowClassName += ' ResponsiveSelect--placeholder'
    }

    return <div className={`ResponsiveSelect ResponsiveSelect--narrow pure-css-select-style theme-default ${narrowClassName}`}>
      <select
        value={this.state.value}
        onChange={this._onSelectChange}
      >
        {
          _.map(fullOpts, ({ key, value, label }) =>
            <option key={key} value={value}>
              {label}
            </option>
          )
        }
      </select>
    </div>;
  },

  _renderAntdSelect() {
    const props = this.props;
    const selectVal = this.state.value && this.state.value !== 'placeholder'
      ? this.state.value
      : undefined;

    return <Select
      {...props}
      size="large"
      defaultValue={props.defaultValue}
      value={selectVal}
      placeholder={props.placeholder}
      className={`ResponsiveSelect ResponsiveSelect--wide ${props.className}`}
      onChange={this._onAntdSelectChange}
    >
      {
        _.map(props.options, ({ name, key, value, label}) =>
          <Select.Option name={name} key={key} value={value}>
            {label}
          </Select.Option>
        )
      }
    </Select>;
  },

  _onAntdSelectChange(value) {
    this._setValue(value);
  },

  _onSelectChange(event) {
    this._setValue(event.target.value);
  },

  _setValue(value) {
    this.setState(() => ({
      value,
    }));

    if (value !== 'placeholder') {
      this.props.onChange(value);
    }
  }
});


export default ResponsiveSelect;
