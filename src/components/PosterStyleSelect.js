import React from 'react';
import _ from 'lodash';
import { Tooltip } from 'antd';
import MediaQuery from 'react-responsive';
import { getPosterLooks } from '../util';
import { TickIcon } from '../util/svg';
import CONST from '../constants';

class PosterStyleSelect extends React.Component {
  render() {
    const styles = _.reject(getPosterLooks(), style => _.includes([
      'summer',
      'pacific',
      'round',
    ], style.id));

    return <MediaQuery minWidth={CONST.SCREEN_MD}>
      {(matches) =>
        <div className="PosterStyleSelect">
          {
            _.map(styles, style => {
              return <PosterStyleItem
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

class PosterStyleItem extends React.Component {
  render() {
    let className = 'PosterStyleSelectItem';
    if (this.props.selected) {
      className += ' PosterStyleSelectItem--selected';
    }

    if (this.props.tooltip) {
      return <div className={className} onClick={this._onClick}>
        <Tooltip title={this.props.style.name}>
          {this._renderContent()}
        </Tooltip>
      </div>;
    }

    return <div className={className} onClick={this._onClick}>
      {this._renderContent()}
    </div>;
  }

  _renderContent = () => {
    return <div className="PosterStyleSelectItem__circle noselect">
      <img
        className="PosterStyleSelectItem__circle-image"
        src={this.props.style.icon}
        alt=""
      />
      <div className="PosterStyleSelectItem__circle-overlay">
        <TickIcon style={{ stroke: 'white' }}/>
      </div>
    </div>;
  };

  _onClick = () => {
    this.props.onClick(this.props.style.id);
  };
}

export default PosterStyleSelect;