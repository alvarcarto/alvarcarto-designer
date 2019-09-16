import React from 'react';
import _ from 'lodash';
const { LandscapeIcon, PortraitIcon, TickIcon } = require('../util/svg');

const ORIENTATIONS = [
  {
    id: 'portrait',
    label: 'Portrait',
    iconReactElement: PortraitIcon,
  },
  {
    id: 'landscape',
    label: 'Landscape',
    iconReactElement: LandscapeIcon,
  }
];

class OrientationSelect extends React.Component {
  render() {
    return (
      <div className="OrientationSelect">
        {
          _.map(ORIENTATIONS, item => {
            return <OrientationItem
              onClick={this._onClickItem}
              key={item.id}
              id={item.id}
              label={item.label}
              iconReactElement={item.iconReactElement}
              selected={this.props.selected === item.id}
            />;
          })
        }
      </div>
    );
  }

  _onClickItem = (orientationId) => {
    this.props.onChange(orientationId);
  };
}

class OrientationItem extends React.Component {
  render() {
    let className = 'OrientationItem';
    const style = { stroke: '#999' };
    if (this.props.selected) {
      className += ' OrientationItem--selected';
      style.stroke = '#333';
    }

    const ItemIcon = this.props.iconReactElement;
    return (
      <div className={className} onClick={this._onClick}>
        <div className="OrientationItem__image-container">
          <ItemIcon style={style} />
          <div className="OrientationItem__overlay">
            <TickIcon />
          </div>
        </div>
        <div className="OrientationItem__label">
          {this.props.label}
        </div>
      </div>
    );
  }

  _onClick = () => {
    this.props.onClick(this.props.id);
  };
}

export default OrientationSelect;
