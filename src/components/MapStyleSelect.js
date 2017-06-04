import React from 'react';
import _ from 'lodash';
import { Tooltip } from 'antd';
import { getStyles } from '../util';
import { TickIcon } from '../util/svg';

const MapStyleSelect = React.createClass({
  render() {
    const styles = _.isArray(this.props.showStyles)
      ? _.filter(getStyles(), s => _.includes(this.props.showStyles, s.id))
      : getStyles();

    return (
      <div className="MapStyleSelect">
        {
          _.map(styles, style => {
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

    const style = {
      background: this.props.style.color,
    };
    return (
      <Tooltip title={this.props.style.name}>
        <div className={className} style={style} onClick={this._onClick}></div>
      </Tooltip>
    );
  },

  _onClick() {
    this.props.onClick(this.props.style.id);
  }
});

export default MapStyleSelect;
