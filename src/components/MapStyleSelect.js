import React from 'react';
import _ from 'lodash';
import { getStyles } from '../util';
import { TickIcon } from '../util/svg';

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
        <div className="MapStyleSelectItem__circle noselect">
          <img
            className="MapStyleSelectItem__circle-image"
            src={this.props.style.image}
            alt="Map style"
          />
          <div className="MapStyleSelectItem__circle-overlay">
            <TickIcon style={{ stroke: 'white' }}/>
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
