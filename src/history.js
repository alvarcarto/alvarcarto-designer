import { createBrowserHistory } from 'history';
import { triggerGtmEvent } from './util/gtm';
import config from './config';

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