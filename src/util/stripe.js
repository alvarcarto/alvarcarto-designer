/* global Stripe */

import BPromise from 'bluebird';
import config from '../config';

export const stripeInstance = Stripe(config.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export function handleCardPayment(clientSecret, element, data) {
  return BPromise.resolve(stripeInstance.handleCardPayment(clientSecret, element, data))
    .then((result) => {
      const { error } = result;

      if (error) {
        const err = new Error(error.message);
        err.type = error.type;
        err.code = error.code;
        err.isClientStripeError = true;
        throw err;
      }

      return result;
    });
}
