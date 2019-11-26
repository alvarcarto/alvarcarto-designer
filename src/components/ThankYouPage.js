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

const STEP_WAITING = {
  stepIndex: 0,
  firstIcon: 'loading',
  firstText: 'Finalizing the payment..'
};
const STEP_RECEIVED = {
  stepIndex: 1,
  firstIcon: null,
  firstText: 'We received your order.',
};


function hasShippableProducts(cart) {
  return _.some(cart, item => item.type !== 'giftCardValue');
}

function hasMapPosters(cart) {
  return _.some(cart, item => !item.type || item.type === 'mapPoster');
}

function hasPhysicalGiftCards(cart) {
  return _.some(cart, item => item.type === 'physicalGiftCard');
}

function getItemsWording(cart) {
  const words = [];

  if (hasMapPosters(cart)) {
    words.push('posters');
  }
  if (hasPhysicalGiftCards(cart)) {
    words.push('gift cards');
  }
  return words.join(' and ');
}

function getFirstText(order) {
  const { cart } = order;
  const city = _.get(order, 'shippingAddress.city');

  if (hasShippableProducts(cart)) {
    return [
      `Your unique ${getItemsWording(cart)} will be printed and shipped to ${city}`,
      'within a few days. In case you chose Priority Production, the items will be printed',
      `and shipped on the next business day at latest.`,
    ].join(' ');
  }

  return [
    'Your ordered items will be sent to you digitally via email as soon as possible.',
  ].join(' ');
}

function getSecondText(order) {
  const { cart } = order;
  const pieces = ['Receipt of the purchase will be sent to your email.'];

  if (hasShippableProducts(cart)) {
    pieces.push('We\'ll keep you updated via email about the delivery details.');
  }

  return pieces.join(' ');
}

class ThankYouPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      order: null,
      loading: true,
      waitingForPayment: false,
    };
  }

  fetchOrder = () => {
    getOrder(this.props.orderId)
      .then(res => {
        const order = res.data;
        this.setState({
          order: res.data,
          error: null,
          loading: false,
          waitingForPayment: !order.paid,
        })

        if (order.paid) {
          setTimeout(() => this.setState({
            waitingForPayment: false,
          }), 3000);

          this.clearFetchLoop();
        }
      })
      .catch(err => {
        const state = {
          loading: false,
        };
        this.clearFetchLoop();

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
          console.error(err);
        });
      })
  }

  clearFetchLoop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.fetchOrder()

    this.interval = setInterval(this.fetchOrder, 5000);
  }

  componentWillUnmount() {
    this.clearFetchLoop()
  }

  render() {
    let className = 'ThankYouPage'
    if (!_.get(this.state, 'order.paid', false)) {
      className += ' ThankYouPage--payment-waiting'
    }

    return (
      <div className={className}>
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
  }

  _renderHeader = () => {
    if (this.state.loading) {
      return <Spinner dark />;
    } else if (this.state.error) {
      return this.state.error.message;
    } else if (this.state.waitingForPayment) {
      return 'Finalizing payment';
    }

    return 'Thank you!';
  };

  _renderContent = () => {
    if (this.state.error) {
      return <div>
        <p>
          {this.state.error.text}
        </p>

        <h3 className="ThankYouPage__help-links">Links</h3>
        <ul>
          <li>
            <a href="/">Design a map print</a>
          </li>
          <li>
            <a href="https://alvarcarto.com/help">Help page</a>
          </li>
        </ul>

        <Footer />
      </div>;
    }

    return this._renderOrderContent();
  };

  _renderOrderContent = () => {
    const { order } = this.state
    const { cart, promotion, currency } = order;
    const step = this.state.waitingForPayment ? STEP_WAITING : STEP_RECEIVED;
    const { stepIndex, firstText, firstIcon } = step;
    const city = _.get(order, 'shippingAddress.city');
    const description = order.shippingAddress
      ? `Package arrives to ${city}.`
      : 'Digital assets arrive.';

    return <div>
      <MediaQuery minWidth={CONST.SCREEN_MD}>
        {(matches) =>
          <Steps direction={matches ? 'horizontal' : 'vertical'} current={stepIndex}>
            <Steps.Step
              title="Design &amp; order"
              description={firstText}
              {...firstIcon ? { icon: <Icon type={firstIcon} /> } : {} }
            />
            <Steps.Step title="Print &amp; delivery" description="Waiting to be printed and delivered." icon={<Icon type="clock-circle-o" />} />
            <Steps.Step title="Delivery arrives" description={description} icon={<Icon type="heart-o" />} />
          </Steps>
        }
      </MediaQuery>

      <div className="ThankYouPage__order-info">
        <p>{getFirstText(order)}</p>
        <p>{getSecondText(order)}</p>
      </div>


      <div className="ThankYouPage__order-container">
        <FinalOrderSummary currency={currency} promotion={promotion} cart={cart} orderId={this.props.orderId} />
      </div>

      <div className="ThankYouPage__ok-container">
        <p>
          Now sit back and relax. This page can be
          safely closed.
        </p>

        <Button type="primary" onClick={this._onBackToStartClick}>
          Back to start
        </Button>
      </div>

      <Footer />
    </div>;
  };

  _onBackToStartClick = () => {
    if (this.props.startOverPath) {
      window.location = this.props.startOverPath;
      return;
    }

    // We are doing a page reload on purpose. It will clear state
    window.location = '/';
  };
}

export default ThankYouPage;
