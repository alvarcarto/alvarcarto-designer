/* global Stripe */

import BPromise from 'bluebird';

// Promisified helper function
export function createToken(opts) {
  return new BPromise((resolve, reject) => {
    Stripe.card.createToken(opts, (status, response) => {
      if (response.error) {
        const err = new Error(response.error.message);
        err.code = response.error.code;
        return reject(err);
      }

      return resolve({ status, response });
    })
  });
}