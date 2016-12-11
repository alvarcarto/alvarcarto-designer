import React from 'react';
import { Tag, Radio, Icon } from 'antd';
import './PosterSizeSelect.css';

const PosterSizeSelect = React.createClass({
  render() {
    return (
      <div className="PosterSizeSelect">
        <h4>Size</h4>
        <Radio.Group onChange={this.props.onChange} value={this.props.value}>
          <Radio.Button value="50x70cm">
            50cm x 70cm
            <div className="PosterSizeSelect__price">
              <Icon type="tag-o" /> 45€
            </div>
          </Radio.Button>
          <Radio.Button value="70x100cm">
            70cm x 100cm
            <div className="PosterSizeSelect__price">
              <Icon type="tag-o" /> 55€
            </div>
          </Radio.Button>
          <Radio.Button value="30x40cm">
            30cm x 40cm
            <div className="PosterSizeSelect__price">
              <Icon type="tag-o" /> 35€
            </div>
          </Radio.Button>
        </Radio.Group>
      </div>
    );
  }
});

export default PosterSizeSelect;
