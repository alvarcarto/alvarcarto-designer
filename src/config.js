import _ from 'lodash';

const CONST = {
  PUBLIC_URL: process.env.PUBLIC_URL,
  DEVELOPMENT: process.env.NODE_ENV === 'development',
  REACT_APP_ORDER_API_URL: process.env.REACT_APP_ORDER_API_URL || 'https://order-api-qa.alvarcarto.com',

  // In production the below APIs are served on the same endpoint,
  // but in development it's convenient to have them separate
  REACT_APP_TILE_API_URL: process.env.REACT_APP_TILE_API_URL || 'https://tile-api.alvarcarto.com/tiles',
  REACT_APP_RENDER_API_URL: process.env.REACT_APP_RENDER_API_URL || 'https://tile-api.alvarcarto.com/render',
};

if (_.endsWith(CONST.REACT_APP_ORDER_API_URL, '/')) {
  throw new Error('Trailing slash in REACT_APP_ORDER_API_URL. Remove it.');
}

if (_.endsWith(CONST.REACT_APP_TILE_API_URL, '/')) {
  throw new Error('Trailing slash in REACT_APP_TILE_API_URL. Remove it.');
}

if (_.endsWith(CONST.REACT_APP_RENDER_API_URL, '/')) {
  throw new Error('Trailing slash in REACT_APP_RENDER_API_URL. Remove it.');
}

export default CONST;
