import React from 'react';
import _ from 'lodash';
import { Tooltip } from 'antd';
import MediaQuery from 'react-responsive';
import { getMaterials } from '../util';
import { TickIcon } from '../util/svg';
import CONST from '../constants';

class PosterMaterialSelect extends React.Component {
  render() {
    const materials = getMaterials();

    return <MediaQuery minWidth={CONST.SCREEN_MD}>
      {(matches) =>
        <div className="PosterMaterialSelect">
          {
            _.map(materials, material => {
              return <PosterMaterialItem
                tooltip={matches}
                onClick={this._onClickItem}
                key={material.id}
                material={material}
                selected={this.props.selected === material.id}
              />;
            })
          }
        </div>
      }
    </MediaQuery>;
  }

  _onClickItem = (id) => {
    this.props.onChange(id);
  };
}

class PosterMaterialItem extends React.Component {
  render() {
    let className = 'PosterMaterialSelectItem';
    if (this.props.selected) {
      className += ' PosterMaterialSelectItem--selected';
    }

    if (this.props.tooltip) {
      return <div className={className} onClick={this._onClick}>
        <Tooltip title={this.props.material.name}>
          {this._renderContent()}
        </Tooltip>
      </div>;
    }

    return <div className={className} onClick={this._onClick}>
      {this._renderContent()}
    </div>;
  }

  _renderContent = () => {
    return <div className="PosterMaterialSelectItem__circle noselect">
      <img
        className="PosterMaterialSelectItem__circle-image"
        src={this.props.material.icon}
        alt=""
      />
      <div className="PosterMaterialSelectItem__circle-overlay">
        <TickIcon style={{ stroke: 'white' }}/>
      </div>
    </div>;
  };

  _onClick = () => {
    this.props.onClick(this.props.material.id);
  };
}

export default PosterMaterialSelect;