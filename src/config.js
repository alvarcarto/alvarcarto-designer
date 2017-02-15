import _ from 'lodash';

const CONST = {
  PUBLIC_URL: process.env.PUBLIC_URL,
  DEVELOPMENT: process.env.NODE_ENV === 'development',
  API_URL: process.env.API_URL || 'http://localhost:9000',
};

if (_.endsWith(CONST.API_URL, '/')) {
  throw new Error('Trailing slash in API_URL. Remove it.');
}

export default CONST;
