/* eslint-disable */

import Raven from 'raven-js';
import WebFont from 'webfontloader';
import config from './config';

if (config.REACT_APP_ANALYTICS_ENV === 'production') {
  // Install Sentry client
  Raven.config('https://2456dddf26df432bae36dd00ea1d2a45@sentry.io/148773').install();
}

// Google fonts
WebFont.load({
  google: {
    families: [
      'Fira Sans Extra Condensed:400,700',
      'Source Sans Pro:200,400,700',
      'Roboto Condensed:300,400,700',
      'Josefin Sans:300,400,700',
      'Pacifico:300,400,700',
      'Amatic SC:300,400,700',
    ],
  },
});
