import React from 'react';
import _ from 'lodash';
import { Radio } from 'antd';
import config from '../config';
const { LandscapeIcon, PortraitIcon, TickIcon } = require('../util/svg');
import './OrientationSelect.css';

const OrientationSelect = React.createClass({
  render() {
    return (
      <Radio.Group className="OrientationSelect" onChange={this._onChange} value={this.props.selected}>
        <Radio value="portrait">Portrait</Radio>
        <Radio value="landscape">Landscape</Radio>
      </Radio.Group>
    );
  },

  _onChange(e) {
    this.props.onChange(e.target.value);
  }
});

export default OrientationSelect;
