import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { setViewState } from '../actions';
import { posterSizeToPixels, createApiUrlQuery } from '../util';
import AlvarMapDesignPanel from './AlvarMapDesignPanel';
import CheckoutPanel from './CheckoutPanel';
import PricePanel from './PricePanel';
import './SidePanel.css';

const SidePanel = React.createClass({
  render() {
    let className = 'SidePanel';
    const { globalState } = this.props;
    const isCheckout = globalState.viewState === 'checkout';
    const Upper = isCheckout ? CheckoutPanel : AlvarMapDesignPanel;

    return (
      <div className="SidePanel">
        <Upper
          className="SidePanel__upper"
          dispatch={this.props.dispatch}
          globalState={globalState}
        />
        <div className="SidePanel__lower">
          {
            isCheckout
              ? this._renderBackLink(globalState)
              : <PricePanel
                dispatch={this.props.dispatch}
                globalState={globalState}
              />
          }
        </div>
      </div>
    );
  },

  _renderBackLink(globalState) {
    return <a onClick={this._onBackClick} className="SidePanel__back-link noselect">
      <Icon type="left" />
      Back to design
    </a>
  },

  _onBackClick() {
    this.props.dispatch(setViewState('editor'));
  },

  _createImageUrl() {
    const { globalState } = this.props;
    const query = createApiUrlQuery(globalState);
    return `http://tiles.alvarcarto.com:5000/api/placeit${query}&resizeToWidth=600`;
  }
});

export default connect(state => ({ globalState: state }))(SidePanel);
