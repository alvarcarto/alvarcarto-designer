import _ from 'lodash';

const CONST = {
  PUBLIC_URL: process.env.PUBLIC_URL,
  DEVELOPMENT: process.env.NODE_ENV === 'development',
  REACT_APP_API_URL: process.env.REACT_APP_API_URL || 'http://localhost:9000',
};

if (_.endsWith(CONST.REACT_APP_API_URL, '/')) {
  throw new Error('Trailing slash in REACT_APP_API_URL. Remove it.');
}

export default CONST;
