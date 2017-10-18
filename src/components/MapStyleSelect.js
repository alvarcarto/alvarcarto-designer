import React from 'react';
import _ from 'lodash';
import { Tooltip } from 'antd';
import MediaQuery from 'react-responsive';
import { getStyles } from '../util';
import CONST from '../constants';

const MapStyleSelect = React.createClass({
  render() {
    const styles = _.isArray(this.props.showStyles)
      ? _.filter(getStyles(), s => _.includes(this.props.showStyles, s.id))
      : getStyles();
    const filteredStyles = _.reject(styles, style => _.includes([
      'madang',
      'iceberg',
      'marshmellow',
    ], style.id));

    return <MediaQuery maxWidth={CONST.SCREEN_SM}>
      {(matches) =>
        <div className="MapStyleSelect">
          {
            _.map(filteredStyles, style => {
              return <MapStyleItem
                tooltip={!matches}
                onClick={this._onClickItem}
                key={style.id}
                style={style}
                selected={this.props.selected === style.id}
              />;
            })
          }
        </div>
      }
    </MediaQuery>;
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

    if (this.props.tooltip) {
      return <Tooltip title={this.props.style.name}>
        <div className={className} style={style} onClick={this._onClick}></div>
      </Tooltip>;
    }

    return <div className={className} style={style} onClick={this._onClick}></div>;
  },

  _onClick() {
    this.props.onClick(this.props.style.id);
  }
});

export default MapStyleSelect;
