import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import history from '../history';
import _ from 'lodash';
import { Icon, Affix, Modal } from 'antd';
import { postOrder, checkoutFormStateChange } from '../actions';
import config from '../config';
import CONST from '../constants';
import CheckoutForm from './CheckoutForm';
import Footer from './Footer';
import CheckoutSummary from './CheckoutSummary';
import Spinner from './Spinner';

class CheckoutPage extends React.Component {
  state = {
    debouncedOnFormChange: _.debounce(this._onFormChange, 600),
  };

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
          <a href="https://alvarcarto.com">
            <img
              src={`${config.PUBLIC_URL}/assets/logo.svg`}
              alt="Alvar Carto"
            />
          </a>
        </div>

        <div className="CheckoutPage__row">
          <MediaQuery maxWidth={CONST.SCREEN_SM}>
            {(matches) => {
              if (matches) {
                return <CheckoutSummary globalState={this.props.globalState} />;
              } else if (this.props.globalState.cart.length > 4) {
                return <CheckoutSummary globalState={this.props.globalState} />;
              } else {
                return <Affix className="CheckoutPage__summary-container" offsetTop={10}>
                  <CheckoutSummary globalState={this.props.globalState} />
                </Affix>;
              }
            }}
          </MediaQuery>
          <CheckoutForm
            cart={this.props.globalState.cart}
            additionalCart={this.props.globalState.additionalCart}
            promotion={this.props.globalState.promotion}
            initialState={this.props.globalState.checkoutFormState}
            onChange={this.state.debouncedOnFormChange}
            onSubmit={this._onFormSubmit}
          />
        </div>

        <Footer />
      </div>
    );
  }

  _onBackClick = () => {
    history.push('/');
  };

  _onFormChange = (state) => {
    this.props.dispatch(checkoutFormStateChange(state));
  };

  _onFormSubmit = (form) => {
    const order = _.merge({}, form, {
      cart: this.props.globalState.cart,
      additionalCart: this.props.globalState.additionalCart,
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

        history.push(`/orders/${orderId}`, { initialAnimation: true });
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

export default connect(state => ({ globalState: state }))(CheckoutPage);
