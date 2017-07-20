/* global dataLayer */

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
history.listen((location) => {
  window.dataLayer.push({
    event: 'virtualPageView',
    virtualPagePath: location.pathname + location.search,
    virtualPageTitle: document.title
  });
});

export default history;