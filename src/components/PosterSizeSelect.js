import React from 'react';
import _ from 'lodash';
import config from '../config';
const { PosterIcon, TickIcon } = require('../util/svg');
import './PosterSizeSelect.css';

const SIZES = [
  {
    id: '30x40cm',
    label: '30cm x 40cm',
    poster: {
      width: 30,
      height: 40,
    },
  },
  {
    id: '50x70cm',
    label: '50cm x 70cm',
    poster: {
      width: 50,
      height: 70,
    },
  },
  {
    id: '70x100cm',
    label: '70cm x 100cm',
    poster: {
      width: 70,
      height: 100,
    },
  }
];

const PosterSizeSelect = React.createClass({
  render() {
    return (
      <div className="PosterSizeSelect">
        {
          _.map(SIZES, item => {
            return <PosterSizeItem
              onClick={this._onClickItem}
              key={item.id}
              id={item.id}
              orientation={this.props.orientation}
              label={item.label}
              poster={item.poster}
              selected={this.props.selected === item.id}
            />;
          })
        }
      </div>
    );
  },

  _onClickItem(orientationId) {
    this.props.onChange(orientationId);
  }
});

const PosterSizeItem = React.createClass({
  render() {
    let className = 'PosterSizeItem';
    const style = { stroke: '#999' };
    if (this.props.selected) {
      className += ' PosterSizeItem--selected';
      style.stroke = '#333';
    }

    if (this.props.orientation === 'landscape') {
      className += ' PosterSizeItem--landscape';
    }

    return (
      <div className={className} onClick={this._onClick}>
        <div className="PosterSizeItem__image-container">
          <PosterIcon {...this.props.poster} />
          <div className="PosterSizeItem__overlay">
            <TickIcon />
          </div>
        </div>
        <div className="PosterSizeItem__label">
          {this.props.label}
        </div>
      </div>
    );
  },

  _onClick() {
    this.props.onClick(this.props.id);
  }
});

export default PosterSizeSelect;

