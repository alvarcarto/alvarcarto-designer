/* global ga */

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
history.listen((location) => {
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview');
});

export default history;