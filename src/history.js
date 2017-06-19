/* global ga */

import { createBrowserHistory } from 'history';
import config from './config';

const history = createBrowserHistory();
history.listen((location) => {
  if (config.NODE_ENV === 'production') {
    window.ga('set', 'page', location.pathname + location.search);
    window.ga('send', 'pageview');
  }
});

export default history;