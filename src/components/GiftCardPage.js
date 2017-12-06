import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col, Steps } from 'antd';
import { checkoutFormStateChange } from '../actions';
import GiftCardCustomizeForm from './GiftCardCustomizeForm';
import GiftCardCheckoutForm from './GiftCardCheckoutForm';

const { Step } = Steps;

const GiftCardPage = React.createClass({
  getInitialState() {
    return {
      debouncedOnFormChange: _.debounce(this._onFormChange, 600),
    };
  },

  render() {
    return (
      <div className="GiftCardPage">
        <Row>
          <Col span={8}><h1>Order details</h1></Col>
        </Row>
        <Row>
          <Col span={24}>
            <GiftCardCheckoutForm
              cart={this.props.globalState.cart}
              onChange={this.state.debouncedOnFormChange}
              onSubmit={this._onFormSubmit}
            />
          </Col>
        </Row>
      </div>
    );
  },

  _onFormChange(state) {
    this.props.dispatch(checkoutFormStateChange(state));
  },

  _onFormSubmit() {

  }
});

export default connect(state => ({ globalState: state }))(GiftCardPage);
