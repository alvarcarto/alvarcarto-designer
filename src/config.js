import _ from 'lodash';

const CONST = {
  PUBLIC_URL: process.env.PUBLIC_URL,

  // There is also a special built-in environment variable called NODE_ENV.
  // You can read it from process.env.NODE_ENV. When you run npm start, it
  // is always equal to 'development', when you run npm test it is always equal
  // to 'test', and when you run npm run build to make a production bundle,
  // it is always equal to 'production'. You cannot override NODE_ENV manually.
  // This prevents developers from accidentally deploying a slow
  // development build to production.
  NODE_ENV: process.env.NODE_ENV,
  DEVELOPMENT: process.env.NODE_ENV === 'development',

  REACT_APP_STRIPE_PUBLISHABLE_KEY: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_PKlD56JoqROJNxZa8JoV5ILr',

  REACT_APP_ORDER_API_URL: process.env.REACT_APP_ORDER_API_URL || 'http://localhost:3001',

  // In production the below APIs are served on the same endpoint,
  // but in development it's convenient to have them separate
  REACT_APP_TILE_API_URL: process.env.REACT_APP_TILE_API_URL || 'https://tile-api.alvarcarto.com/tiles',
  REACT_APP_RENDER_API_URL: process.env.REACT_APP_RENDER_API_URL || 'https://tile-api.alvarcarto.com/render',
  REACT_APP_PLACEMENT_API_URL: process.env.REACT_APP_PLACEMENT_API_URL || 'https://tile-api.alvarcarto.com/placement',
  REACT_APP_RENDER_API_KEY: process.env.REACT_APP_RENDER_API_KEY,
  REACT_APP_ANALYTICS_ENV: process.env.REACT_APP_ANALYTICS_ENV || 'development',
  REACT_APP_GEO_API_URL: process.env.REACT_APP_GEO_API_URL || 'https://freegeoip.app',

  // By default design-qa.alvarcarto.com GTM ID is used
  REACT_APP_GTM_ID: process.env.REACT_APP_GTM_ID,

  REACT_APP_ALGOLIA_APP_ID: process.env.REACT_APP_ALGOLIA_APP_ID,
  REACT_APP_ALGOLIA_API_KEY: process.env.REACT_APP_ALGOLIA_API_KEY,

  REACT_APP_BRANCH: process.env.REACT_APP_BRANCH || 'master',
};

// For debugging purposes
window.BRANCH = process.env.REACT_APP_BRANCH;

if (!CONST.REACT_APP_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('REACT_APP_STRIPE_PUBLISHABLE_KEY must be set.');
}

if (!CONST.REACT_APP_ALGOLIA_APP_ID) {
  throw new Error('REACT_APP_ALGOLIA_APP_ID must be set.');
}

if (!CONST.REACT_APP_ALGOLIA_API_KEY) {
  throw new Error('REACT_APP_ALGOLIA_API_KEY must be set.');
}

if (!CONST.REACT_APP_GTM_ID) {
  throw new Error('REACT_APP_GTM_ID must be set.');
}

if (_.endsWith(CONST.REACT_APP_ORDER_API_URL, '/')) {
  throw new Error('Trailing slash in REACT_APP_ORDER_API_URL. Remove it.');
}

if (_.endsWith(CONST.REACT_APP_TILE_API_URL, '/')) {
  throw new Error('Trailing slash in REACT_APP_TILE_API_URL. Remove it.');
}

if (_.endsWith(CONST.REACT_APP_RENDER_API_URL, '/')) {
  throw new Error('Trailing slash in REACT_APP_RENDER_API_URL. Remove it.');
}

if (_.endsWith(CONST.REACT_APP_PLACEMENT_API_URL, '/')) {
  throw new Error('Trailing slash in REACT_APP_PLACEMENT_API_URL. Remove it.');
}

export default CONST;
