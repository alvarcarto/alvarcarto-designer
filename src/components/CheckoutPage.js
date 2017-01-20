import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Row, Col, Icon } from 'antd';
import { setViewState } from '../actions';
import config from '../config';
import CheckoutForm from './CheckoutForm';
import CheckoutSummary from './CheckoutSummary';
import './CheckoutPage.css';

const CheckoutPage = React.createClass({
  render() {
    return (
      <div className="CheckoutPage">
        <a onClick={this._onBackClick} className="CheckoutPage__back-link noselect">
          <Icon type="left" />
          Back to design
        </a>

        <div className="CheckoutPage__logo">
          <a href="http://alvarcarto.com">
            <img
              src={`${config.PUBLIC_URL}/assets/logo.svg`}
              alt="Alvar Carto"
            />
          </a>
        </div>

        <CheckoutSummary globalState={this.props.globalState} />
        <CheckoutForm />
      </div>
    );
  },

  _onBackClick() {
    this.props.dispatch(setViewState('editor'));
  }
});

export default connect(state => ({ globalState: state }))(CheckoutPage);
