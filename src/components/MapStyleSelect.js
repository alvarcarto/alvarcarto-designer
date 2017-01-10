import React from 'react';
import _ from 'lodash';
import { getStyles } from '../util';
import { Icon, Select, Radio } from 'antd';
const { Option } = Select;
import './MapStyleSelect.css';

const MapStyleSelect = React.createClass({
  render() {
    return (
      <div className="MapStyleSelect">
        {
          _.map(getStyles(), style => {
            return <MapStyleItem
              onClick={this._onClickItem}
              key={style.id}
              style={style}
              selected={this.props.selected === style.id}
            />;
          })
        }
      </div>
    );
  },

  _onClickItem(styleId) {
    this.props.onChange(styleId);
  }
});

const MapStyleItem = React.createClass({
  render() {
    let className = 'MapStyleSelectItem';
    if (this.props.selected) {
      className += ' MapStyleSelectItem--selected';
    }

    return (
      <div className={className} onClick={this._onClick}>
        <div className="MapStyleSelectItem__circle">
          <img
            className="MapStyleSelectItem__circle-image"
            src={this.props.style.image}
            alt="Map style image"
          />
          <div className="MapStyleSelectItem__circle-overlay">
            <Icon type="check" />
          </div>
        </div>
        <div className="MapStyleSelectItem__label">
          {this.props.style.name}
        </div>
      </div>
    );
  },

  _onClick() {
    this.props.onClick(this.props.style.id);
  }
});

export default MapStyleSelect;
