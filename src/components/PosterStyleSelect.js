import React from 'react';
import _ from 'lodash';
import { Icon, Tooltip } from 'antd';
import Slider from 'react-slick';
import { getPosterLooks } from '../util';
import { TickIcon } from '../util/svg';

const PosterStyleSelect = React.createClass({
  render() {
    return (
      <div className="PosterStyleSelect">
          {
            _.map(getPosterLooks(), style => {
              return <PosterStyleItem
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

const PosterStyleItem = React.createClass({
  render() {
    let className = 'PosterStyleSelectItem';
    if (this.props.selected) {
      className += ' PosterStyleSelectItem--selected';
    }

    return (
      <div className={className} onClick={this._onClick}>
        <Tooltip title={this.props.style.name}>
          <div className="PosterStyleSelectItem__circle noselect">
            <img
              className="PosterStyleSelectItem__circle-image"
              src={this.props.style.icon}
              alt=""
            />
            <div className="PosterStyleSelectItem__circle-overlay">
              <TickIcon style={{ stroke: 'white' }}/>
            </div>
          </div>
        </Tooltip>
      </div>
    );
  },

  _onClick() {
    this.props.onClick(this.props.style.id);
  }
});

export default PosterStyleSelect;