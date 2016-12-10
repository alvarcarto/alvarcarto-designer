import React from 'react';
import { connect } from 'react-redux';
import { oneLineTrim } from 'common-tags';
import { posterSizeToPixels } from '../util';
import AlvarMapDesignPanel from './AlvarMapDesignPanel';
import PricePanel from './PricePanel';
import './SidePanel.css';

const SidePanel = React.createClass({
  render() {
    return (
      <div className="SidePanel">
        <PricePanel
          dispatch={this.props.dispatch}
          globalState={this.props.globalState}
        />

        <AlvarMapDesignPanel
          dispatch={this.props.dispatch}
          globalState={this.props.globalState}
        />
        <img
          className="SidePanel__preview-image"
          src={this._createImageUrl()}
        />

      </div>
    );
  },

  _createImageUrl() {
    const globalState = this.props.globalState;
    const dimensions = posterSizeToPixels(globalState.size);

    return oneLineTrim`http://tiles.alvarcarto.com:5000/api/placeit
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

export default connect(state => ({ globalState: state }))(SidePanel);
