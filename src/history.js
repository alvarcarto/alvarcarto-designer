/* global dataLayer */

import { createBrowserHistory } from 'history';
import config from './config';

window.BRANCH = config.REACT_APP_BRANCH;

const history = createBrowserHistory();
history.listen((location) => {
  window.dataLayer.push({
    event: 'virtualPageView',
    virtualPagePath: location.pathname + location.search,
    virtualPageTitle: document.title,
    branch: config.REACT_APP_BRANCH,
  });
});

export default history;