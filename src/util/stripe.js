/* global Stripe */

import BPromise from 'bluebird';
import config from '../config';

export const stripeInstance = Stripe(config.REACT_APP_STRIPE_PUBLISHABLE_KEY);
export function createToken(element, opts) {
  return BPromise.resolve(stripeInstance.createToken(element, opts))
    .then((result) => {
      const { error } = result;
      if (error) {
        const err = new Error(error.message);
        err.type = error.type;
        err.code = error.code;
        err.charge = error.charge;
        err.declined_code = error.declined_code;
        throw err;
      }

      return result.token;
    });
}
