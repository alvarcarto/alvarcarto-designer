/* global dataLayer */

import { createBrowserHistory } from 'history';
import { triggerGtmEvent } from './util/gtm';
import config from './config';

// For debugging purposes
window.BRANCH = config.REACT_APP_BRANCH;

const history = createBrowserHistory();
history.listen((location) => {
  triggerGtmEvent({
    event: 'virtualPageView',
    virtualPagePath: location.pathname + location.search,
    virtualPageTitle: document.title,
    branch: config.REACT_APP_BRANCH,
  });
});

export default history;