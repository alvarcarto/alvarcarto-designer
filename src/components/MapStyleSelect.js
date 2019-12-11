import React from 'react';
import _ from 'lodash';
import { Tooltip } from 'antd';
import { getMapStyles } from 'alvarcarto-common';
import MediaQuery from 'react-responsive';
import CONST from '../constants';

class MapStyleSelect extends React.Component {
  render() {
    const styleIds = this.props.showStyles;

    if (this.props.debug) {
      styleIds.push('contrast-black');
    }
    const filteredStyles = _.filter(getMapStyles(), style => _.includes(styleIds, style.id));

    return <MediaQuery minWidth={CONST.SCREEN_MD}>
      {(matches) =>
        <div className="MapStyleSelect">
          {
            _.map(filteredStyles, style => {
              return <MapStyleItem
                tooltip={matches}
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
  }

  _onClickItem = (styleId) => {
    this.props.onChange(styleId);
  };
}

class MapStyleItem extends React.Component {
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
  }

  _onClick = () => {
    this.props.onClick(this.props.style.id);
  };
}

export default MapStyleSelect;
