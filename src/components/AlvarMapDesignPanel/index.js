import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './index.css';

const AlvarMapDesignPanel = React.createClass({
  render() {
    return (
      <div className="AlvarMapDesignPanel">
        <h4>Find your favorite place</h4>
        <Input.Search
          className="AlvarMapDesignPanel__search"
          placeholder="Search for a city"
          onSearch={value => console.log(value)}
        />

        <h4>.. or try our favorites</h4>
        <Button className="AlvarMapDesignPanel__city-button" type="dashed">New York</Button>
        <Button className="AlvarMapDesignPanel__city-button" type="dashed">Bangkok</Button>
        <Button className="AlvarMapDesignPanel__city-button" type="dashed">Heart of Hongkong</Button>
      </div>
    );
  }
});

export default AlvarMapDesignPanel;
