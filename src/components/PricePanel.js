import { oneLineTrim } from 'common-tags';
import React from 'react';
import { Icon } from 'antd';
import { posterSizeToPixels } from '../util';
import { calculatePrice } from '../util/price';
import './PricePanel.css';

// TODO: Use currency lib
const symbols = {
  EUR: '\u20AC',
};

const PricePanel = React.createClass({
  render() {
    const { globalState } = this.props;
    const price = calculatePrice(globalState);
    return (
      <a className="PricePanel" target="_blank" href={this._createUrl()}>
        <h5 className="PricePanel__price">{price.value} {symbols[price.currency]}</h5>
        <p className="PricePanel__link">
          Checkout
          <Icon type="right" />
        </p>
      </a>
    );
  },

  _createUrl() {
    const { globalState } = this.props;
    const dimensions = posterSizeToPixels(globalState.size);

    return oneLineTrim`http://tiles.alvarcarto.com:5000/api/render
      ?lat=${globalState.mapCenter.lat}
      &lng=${globalState.mapCenter.lng}
      &zoom=${globalState.mapZoom}
      &style=${globalState.mapStyle}
      &pitch=${globalState.mapPitch}
      &bearing=${globalState.mapBearing}
      &width=${dimensions.width}
      &height=${dimensions.height}
    `;
  }
});

export default PricePanel;
