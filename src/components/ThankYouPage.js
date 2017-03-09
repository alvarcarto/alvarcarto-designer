import React from 'react';
import { connect } from 'react-redux';
import { Icon, Steps } from 'antd';
import config from '../config';
import FinalOrderSummary from './FinalOrderSummary';
import Footer from './Footer';

const ThankYouPage = React.createClass({
  render() {
    const city = this.props.globalState.shippingAddress.city;

    return (
      <div className="ThankYouPage">
        <div className="ThankYouPage__content">
          <h1>Thank you!</h1>

          <Steps current={1}>
            <Steps.Step title="Design &amp; order" description="We received your order." />
            <Steps.Step title="Print &amp; delivery" description="Your posters are soon printed and shipped." icon={<Icon type="clock-circle-o" />} />
            <Steps.Step title="Delivery arrives" description={`Posters arrive to ${city}.`} icon={<Icon type="heart-o" />} />
          </Steps>

          <div className="ThankYouPage__logo">
            <a href="https://alvarcarto.com">
              <img
                src={`${config.PUBLIC_URL}/assets/logo.svg`}
                alt="Alvar Carto"
              />
            </a>
          </div>

          <p>
            Your unique posters will be printed and shipped within a few days to {city}.
            In case you chose Express Shipping, the posters will be printed
            and shipped today if the order was sent before 12PM (12:00).
          </p>

          <p>
            Receipt of the purchase will be sent to your email by Stripe.
          </p>

          <div className="ThankYouPage__order-container">
            <FinalOrderSummary />
          </div>

          <Footer />
        </div>
      </div>
    );
  }
});

export default connect(state => ({ globalState: state }))(ThankYouPage);
