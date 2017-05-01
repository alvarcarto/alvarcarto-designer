/* global Stripe */

import BPromise from 'bluebird';
import config from '../config';

export const stripeInstance = Stripe(config.REACT_APP_STRIPE_PUBLISHABLE_KEY);
export function createToken(element, opts) {
  return BPromise.resolve(stripeInstance.createToken(element, opts));
}
