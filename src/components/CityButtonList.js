import React from 'react';
import { Button } from 'antd';
import './CityButtonList.css';

const cityButtons = [
  { id: 1, text: 'Heart of Hongkong', zoom: 11, lat: 22.279579, lng: 114.173998 },
  { id: 2, text: 'New York', zoom: 10, lat: 40.732540, lng: -73.998941 },
  { id: 3, text: 'Paris', zoom: 10, lat: 48.859741, lng: 2.341565 },
  { id: 4, text: 'Mariehamn', zoom: 11, lat: 60.089695, lng: 19.933891 },
];

const CityButtonList = React.createClass({
  render() {
    const buttons = cityButtons.map(item =>
      <CityButton key={item.id} item={item} onClick={this.props.onButtonClick} />
    );

    return (
      <div className="CityButtonList">
        {buttons}
      </div>
    );
  }
});

const CityButton = React.createClass({
  render() {
    return <Button
      className="CityButton"
      type="dashed"
      onClick={this._onClick}
    >
      {this.props.item.text}
    </Button>;
  },

  _onClick() {
    this.props.onClick(this.props.item);
  }
});

export default CityButtonList;
