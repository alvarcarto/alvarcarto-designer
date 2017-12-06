import { iframeResizerContentWindow } from 'iframe-resizer';
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col, Steps } from 'antd';
import { checkoutFormStateChange } from '../actions';
import GiftCardCheckoutForm from './GiftCardCheckoutForm';

const { Step } = Steps;

const GiftCardPage = React.createClass({
  getInitialState() {
    return {
      debouncedOnFormChange: _.debounce(this._onFormChange, 600),
    };
  },

  render() {
    const { globalState } = this.props;
    const giftCardType = _.get(globalState, 'checkoutFormState.giftCardCustomizeForm.values.giftCardType');
    const cart = giftCardType === 'digital'
      ? globalState.giftCardCart
      : globalState.giftCardCart.concat([{ type: 'physicalGiftCard', quantity: 1 }]);

    return (
      <div className="GiftCardPage">
        <h1>Order details</h1>

        <GiftCardCheckoutForm
          cart={cart}
          onChange={this.state.debouncedOnFormChange}
          onSubmit={this._onFormSubmit}
        />
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
