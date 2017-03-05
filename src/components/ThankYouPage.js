import React from 'react';
import { connect } from 'react-redux';
import config from '../config';
import FinalOrderSummary from './FinalOrderSummary';
import Footer from './Footer';

const ThankYouPage = React.createClass({
  render() {
    return (
      <div className="ThankYouPage">
        <div className="ThankYouPage__content">
          <h1>Thank you!</h1>

          <div className="ThankYouPage__logo">
            <a href="https://alvarcarto.com">
              <img
                src={`${config.PUBLIC_URL}/assets/logo.svg`}
                alt="Alvar Carto"
              />
            </a>
          </div>

          <p>
            Your unique posters will be printed and shipped within a few days.
            In case you chose Express Shipping, the posters will be printed
            and shipped today if the order was sent before 5PM (17:00).
          </p>

          <p>
            Stripe should soon send a receipt of the purchase to your email.
          </p>

          <FinalOrderSummary />

          <Footer />
        </div>
      </div>
    );
  }
});

export default connect(state => ({ globalState: state }))(ThankYouPage);
