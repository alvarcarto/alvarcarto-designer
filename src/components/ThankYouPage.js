import _ from 'lodash';
import React from 'react';
import MediaQuery from 'react-responsive';
import { Icon, Steps, Button } from 'antd';
import { getOrder } from '../util/api';
import config from '../config';
import CONST from '../constants';
import Spinner from './Spinner';
import FinalOrderSummary from './FinalOrderSummary';
import Footer from './Footer';

const STEPS_FIRST = {
  stepIndex: 0,
  firstIcon: 'loading',
  firstText: 'Finalizing the order ..'
};
const STEPS_SECOND = {
  stepIndex: 1,
  firstIcon: null,
  firstText: 'We received your order.',
};

const ThankYouPage = React.createClass({
  getInitialState() {
    return {
      error: null,
      order: null,
      loading: true,
      steps: this.props.initialAnimation ? STEPS_FIRST : STEPS_SECOND,
    };
  },

  componentDidMount() {
    getOrder(this.props.orderId)
      .then(res => {
        this.setState({
          order: res.data,
          error: null,
          loading: false,
        });

        setTimeout(() => this.setState({
          steps: STEPS_SECOND,
        }), 3000);
      })
      .catch(err => {
        const state = {
          loading: false,
        };

        if (_.get(err, 'response.status') === 404) {
          state.error = {
            message: 'Order not found',
            text: `Couldn't find any order with ID: #${this.props.orderId}.` +
                  ' Please contact our support if you think your order was lost.',
            statusCode: 404,
          }
        } else if (_.get(err, 'response.status') === 400) {
          state.error = {
            message: 'Incorrect order ID',
            text: `Incorrect order ID: #${this.props.orderId}. Please double check your order ID.` +
                  ' Contact our support if you think your order was lost.',
            statusCode: 400,
          }
        } else {
          state.error = {
            message: 'Unexpected error',
            text: 'Something unexpected happened when trying to get order details.' +
              ' If the problem persists, please contact our support',
          };
        }

        this.setState(state, () => {
          throw err;
        });
      })
  },

  render() {
    return (
      <div className="ThankYouPage">
        <div className="ThankYouPage__content">
          <h1>{this._renderHeader()}</h1>

          <div className="ThankYouPage__logo">
            <a href="https://alvarcarto.com">
              <img
                src={`${config.PUBLIC_URL}/assets/logo.svg`}
                alt="Alvar Carto"
              />
            </a>
          </div>

          {
            this.state.loading
              ? null
              : this._renderContent()
          }
        </div>
      </div>
    );
  },

  _renderHeader() {
    if (this.state.loading) {
      return <Spinner dark />;
    } else if (this.state.error) {
      return this.state.error.message;
    }

    return 'Thank you!';
  },

  _renderContent() {
    if (this.state.error) {
      return <div>
        <p>
          {this.state.error.text}
        </p>

        <h3 className="ThankYouPage__help-links">Links</h3>
        <ul>
          <li>
            <a href="/">Design a poster</a>
          </li>
          <li>
            <a href="https://alvarcarto.com/help">Help</a>
          </li>
        </ul>

        <Footer />
      </div>;
    }

    return this._renderOrderContent();
  },

  _renderOrderContent() {
    const { cart, promotion } = this.state.order;
    const { city, countryCode } = this.state.order.shippingAddress;
    const { stepIndex, firstText, firstIcon } = this.state.steps;

    return <div>
      <MediaQuery maxWidth={CONST.SCREEN_SM}>
        {(matches) =>
          <Steps direction={matches ? 'vertical' : 'horizontal'} current={stepIndex}>
            <Steps.Step
              title="Design &amp; order"
              description={firstText}
              {...firstIcon ? { icon: <Icon type={firstIcon} /> } : {} }
            />
            <Steps.Step title="Print &amp; delivery" description="Waiting to be printed and delivered." icon={<Icon type="clock-circle-o" />} />
            <Steps.Step title="Delivery arrives" description={`Package arrives to ${city}.`} icon={<Icon type="heart-o" />} />
          </Steps>
        }
      </MediaQuery>

      <p>
        Your unique posters will be printed and shipped to {city} within a few days.
        In case you chose Express Shipping, the posters will be printed
        and shipped today if the order was sent before 12PM (12:00).
      </p>

      <p>
        Receipt of the purchase will be sent to your email by Stripe.
        {
          countryCode !== 'FI'
            ? ' We\'ll send the delivery tracking code via email as soon as we get it.'
            : ' Unfortunately we don\'t provide tracking code for deliveries to Finland.'
        }
      </p>

      <div className="ThankYouPage__order-container">
        <FinalOrderSummary promotion={promotion} cart={cart} orderId={this.props.orderId} />
      </div>

      <div className="ThankYouPage__ok-container">
        <p>
          Now sit back and relax, your posters will arrive soon. This page can be
          safely closed.
        </p>

        <Button type="primary" onClick={this._onBackToStartClick}>
          Back to start
        </Button>
      </div>

      <Footer />
    </div>;
  },

  _onBackToStartClick() {
    // We are doing a page reload on purpose. It will clear state
    window.location = '/';
  }
});

export default ThankYouPage;
