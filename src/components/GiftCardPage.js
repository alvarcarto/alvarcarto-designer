// eslint-disable-next-line
import { iframeResizerContentWindow } from 'iframe-resizer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import _ from 'lodash';
import history from '../history';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { checkoutFormStateChange, postOrder } from '../actions';
import GiftCardCheckoutForm from './GiftCardCheckoutForm';
import Spinner from './Spinner';

class GiftCardPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      debouncedOnFormChange: _.debounce(this._onFormChange, 600),
    };
  }

  render() {
    const { globalState } = this.props;
    const cart = globalState.giftCardCart;
    const { currency } = globalState;

    return (
      <div className="GiftCardPage">
        <ReactCSSTransitionGroup
            transitionName="popin"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={100}
          >
          {
            this.props.globalState.postingOrder
              ? <div className="GiftCardPage__overlay">
                  <Spinner />
                </div>
              : null
          }
        </ReactCSSTransitionGroup>

        <h1>Order details</h1>

        <GiftCardCheckoutForm
          cart={cart}
          currency={currency}
          onChange={this.state.debouncedOnFormChange}
          onSubmit={this._onFormSubmit}
        />
      </div>
    );
  }

  _onFormChange = (state) => {
    this.props.dispatch(checkoutFormStateChange(state));
  };

  _onFormSubmit = (form) => {
    const order = _.merge({}, form, {
      cart: this.props.globalState.giftCardCart,
      currency: this.props.globalState.currency,
    });
    if (this.props.globalState.promotion) {
      order.promotion = this.props.globalState.promotion;
    }

    this.props.dispatch(postOrder(order))
      .then((res) => {
        const data = _.get(res, 'data');
        const orderId = _.get(data, 'orderId');
        if (!orderId) {
          throw new Error(`API did not respond with order id. Data: ${data}`);
        }

        history.push(`/orders/${orderId}`, {
          initialAnimation: true,
          startOverPath: '/gift-cards',
        });
      })
      .catch(err => {
        const isPaymentError = _.get(err, 'response.status') === 402 ||
                               _.get(err, 'type') === 'card_error';

        if (isPaymentError) {
          const detailedError = _.get(err, 'type') === 'card_error'
            ? _.get(err, 'message', 'Unexpected error')
            : _.get(err, 'response.data.messages.0', 'Unexpected error');

          Modal.error({
            title: 'Payment error',
            onCancel: () => null,  // To prevent expection
            content: <div>
              <p>
                Order could not be completed, because processing the
                payment failed with reason: <i>{detailedError}</i>
              </p>
              <p>
                <b>Your card was not charged yet.</b> You can try to complete
                the purchase again.
              </p>
              <p>
                We're sorry for the inconvenience. If the problem persists,
                please contact our support at <a target="_blank" rel="noopener noreferrer" href="mailto:help@alvarcarto.com"> help@alvarcarto.com</a>.
              </p>
            </div>
          });
        } else if (_.get(err, 'response.status') === 400) {
          const detailedError = _.get(err, 'response.data.errors.0.messages.0', 'Unexpected error');
          Modal.error({
            title: 'Invalid order details',
            onCancel: () => null,  // To prevent expection
            content: <div>
              <p>
                Order could not be completed, because order form contained
                invalid fields. Error message: <i>{detailedError}</i>.
              </p>
              <p>
                <b>Your card was not charged yet.</b> You can try to complete
                the purchase again.
              </p>
              <p>
                We're sorry for the inconvenience. If the problem persists,
                please contact our support at <a target="_blank" rel="noopener noreferrer" href="mailto:help@alvarcarto.com"> help@alvarcarto.com</a>.
              </p>
            </div>
          });
        } else if (_.get(err, 'response.status') > 400) {
          Modal.error({
            title: 'Unexpected error',
            onCancel: () => null,  // To prevent expection
            content: <div>
              <p>
                Order could not be completed, because of an unexpected error.
                Our engineers will fix the problem as soon as possible.
              </p>
              <p>
                We're sorry for the inconvenience. If you were charged,
                please contact our support at <a target="_blank" rel="noopener noreferrer" href="mailto:help@alvarcarto.com"> help@alvarcarto.com</a>.
              </p>
              <p>
                Don't worry, we promise to fix the situation.
              </p>
            </div>
          });
        } else {
          Modal.error({
            title: 'Unexpected error',
            onCancel: () => null,  // To prevent expection
            content: <div>
              <p>
                Order could not be completed, because of an unexpected error.
                Our engineers will fix the problem as soon as possible.
              </p>
              <p>
                We're sorry for the inconvenience. If you were charged,
                please contact our support at <a target="_blank" rel="noopener noreferrer" href="mailto:help@alvarcarto.com"> help@alvarcarto.com</a>.
              </p>
              <p>
                Don't worry, we promise to fix the situation.
              </p>
            </div>
          });

          throw err;
        }
      });
  };
}

export default connect(state => ({ globalState: state }))(GiftCardPage);
