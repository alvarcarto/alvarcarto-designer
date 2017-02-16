import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import history from '../history';
import _ from 'lodash';
import { Row, Col, Icon, Affix } from 'antd';
import { postOrder } from '../actions';
import config from '../config';
import CheckoutForm from './CheckoutForm';
import CheckoutSummary from './CheckoutSummary';
import Spinner from './Spinner';

const CheckoutPage = React.createClass({
  render() {
    return (
      <div className="CheckoutPage">
        <ReactCSSTransitionGroup
            transitionName="popin"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={100}
          >
          {
            this.props.globalState.postingOrder
              ? <div className="CheckoutPage__overlay">
                  <Spinner />
                  <h5>Completing payment ..</h5>
                </div>
              : null
          }
        </ReactCSSTransitionGroup>

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
          <CheckoutForm onSubmit={this._onFormSubmit} />
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
    history.push('/');
  },

  _onFormSubmit(form) {
    const order = _.merge({}, form, {
      cart: this.props.globalState.cart,
    });

    this.props.dispatch(postOrder(order))
      .then(() => history.push('/thank-you'));
  }
});

export default connect(state => ({ globalState: state }))(CheckoutPage);
