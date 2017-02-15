import React from 'react';
import { Button } from 'antd';

const cityButtons = [
  { id: 1, header: 'Heart of Hongkong', smallHeader: 'China', zoom: 11, lat: 22.279579, lng: 114.173998 },
  { id: 2, header: 'New York', smallHeader: 'United States of America', zoom: 10, lat: 40.732540, lng: -73.998941 },
  { id: 3, header: 'Paris', smallHeader: 'France', zoom: 10, lat: 48.859741, lng: 2.341565 },
  { id: 4, header: 'Mariehamn', smallHeader: 'Åland Islands', zoom: 11, lat: 60.089695, lng: 19.933891 },
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
      type="ghost"
      onClick={this._onClick}
    >
      {this.props.item.header}
    </Button>;
  },

  _onClick() {
    this.props.onClick(this.props.item);
  }
});

export default CityButtonList;
