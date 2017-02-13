import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Row, Col, Icon, Affix } from 'antd';
import { setViewState } from '../actions';
import config from '../config';
import CheckoutForm from './CheckoutForm';
import CheckoutSummary from './CheckoutSummary';

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

        <div className="CheckoutPage__row">
          <Affix className="CheckoutPage__summary-container" offsetTop={10}>
            <CheckoutSummary globalState={this.props.globalState} />
          </Affix>
          <CheckoutForm />
        </div>

        <footer className="CheckoutPage__footer">
          <Row gutter={8}>
            <Col span={12}>
              <ul>
                <li>
                   <a href="#">Shipping &amp; Returns</a>
                </li>
                <li>
                   <a href="#">FAQ</a>
                </li>
                <li>
                   <a href="#">Help</a>
                </li>
              </ul>
            </Col>
            <Col span={12}>
              <p>
                Any questions? Send us mail to
                <a href="mailto:help@alvarcarto.com"> help@alvarcarto.com</a>.
              </p>
              <p>We are located at Luova Laboratorio, Saaristonkatu 9, 90100 Oulu, Finland.</p>
            </Col>
          </Row>
        </footer>
      </div>
    );
  },

  _onBackClick() {
    this.props.dispatch(setViewState('editor'));
  }
});

export default connect(state => ({ globalState: state }))(CheckoutPage);
