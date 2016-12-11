import React from 'react';
import { connect } from 'react-redux';
import { posterSizeToPixels, createApiUrlQuery } from '../util';
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
    const { globalState } = this.props;
    const query = createApiUrlQuery(globalState);
    return `http://tiles.alvarcarto.com:5000/api/placeit${query}&resizeToWidth=600`;
  }
});

export default connect(state => ({ globalState: state }))(SidePanel);
