/* global Modernizr */

import React from 'react';
import _ from 'lodash';
import { Checkbox, Modal, notification, Icon } from 'antd';
import config from './config';
import { connect } from 'react-redux';
import { setLocation, setInitialCart, setCurrentPromotion, setCurrentMessage } from './actions';
import { getStorageSafe, setStorageSafe } from './util';
import EditorPage from './components/EditorPage';
import CheckoutPage from './components/CheckoutPage';
import GiftCardPage from './components/GiftCardPage';
import ThankYouPage from './components/ThankYouPage';
import { initialState } from './reducers';
import { assertHealth } from './util/api';
import history from './history';

function showNotificationMessage(message) {
  notification.open({
    message: message.title,
    description: message.message,
    duration: 10,
    icon: <Icon type={message.icon} theme="filled" />
  });
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notificationMessage: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { notificationMessage, location } = nextProps.globalState;
    const isCorrectPage = location.pathname === '/';
    if (isCorrectPage && notificationMessage && !prevState.notificationMessage) {
      showNotificationMessage(notificationMessage);

      return {
        notificationMessage,
      };
    }

    return null;
  }

  componentDidMount() {
    const shouldShow = shouldShowUnsupported();
    if (shouldShow && (!Modernizr.flexbox || !Modernizr.backgroundblendmode)) {
      this._showUnsupportedWarning();
    }

    // Listen for changes to the current url location.
    history.listen((location, action) => {
      window.scrollTo(0, 0);
      this.props.dispatch(setLocation(location));
    });

    if (!config.DEVELOPMENT) {
      window.onbeforeunload = this._beforeLeavePage;
      this._alertIfBackendDown();
    }

    this.props.dispatch(setCurrentMessage());
    this.props.dispatch(setCurrentPromotion());
    this.props.dispatch(setInitialCart());
  }

  render() {
    const { globalState } = this.props;
    const pathname = _.trimEnd(globalState.location.pathname, '/');

    let page;
    if (pathname === '/checkout') {
      page = <CheckoutPage />;
    } else if (pathname === '/giftcard' || pathname === '/gift-cards') {
      page = <GiftCardPage />;
    } else if (pathname.match(/^\/orders\/[a-zA-Z0-9-]+$/)) {
      // If matches /orders/:id, where id is alphanumeric and may contain dash
      const orderId = _.last(pathname.split('/'));

      page = <ThankYouPage
        initialAnimation={globalState.postOrderResponse !== null}
        orderId={orderId}
      />;
    } else {
      page = <EditorPage />;
    }

    return (
      <div className="App">
        {/* Preload fonts */}
        <div style={{position: 'fixed', zIndex: -1000, top: -10000, height: 0, width: 0, padding: 0, margin: 0, visibility: 'hidden', opacity: 0}}>
          <p style={{fontFamily: 'JosefinSans-Bold'}}>T</p>
          <p style={{fontFamily: 'JosefinSans'}}>T</p>
          <p style={{fontFamily: 'JosefinSans-Light'}}>T</p>
          <p style={{fontFamily: 'RobotoCondensed-Light'}}>T</p>
          <p style={{fontFamily: 'RobotoCondensed-Bold'}}>T</p>
          <p style={{fontFamily: 'Pacifico'}}>T</p>
          <p style={{fontFamily: 'AmaticSC-Bold'}}>T</p>
        </div>

        <div className="App__layout">
          {page}
        </div>
      </div>
    );
  }

  _beforeLeavePage = () => {
    const importantFields = [
      'location',
      'cart',
    ];

    const initial = _.pick(initialState, importantFields);
    // Ignore mapBounds since those are initially setautomatically
    _.each(initial.cart, item => {
      delete item.mapBounds;
    });
    const current = _.pick(this.props.globalState, importantFields);
    _.each(current.cart, item => {
      delete item.mapBounds;
    });

    const startDate = this.props.globalState.initialLoadTime;
    const timeDiff = (new Date()).getTime() - startDate.getTime();
    const diffInSecs = Math.ceil(timeDiff / 1000);
    const enoughTimeSpent = diffInSecs > 120;

    const userHasMadeChanges = !_.isEqual(initial, current);
    const userHasOrderedPoster = this.props.globalState.postOrderResponse !== null;
    if (enoughTimeSpent && !userHasOrderedPoster && userHasMadeChanges) {
      return 'Do you want to leave this site?';
    }
  };

  _showUnsupportedWarning = () => {
    Modal.warning({
      title: 'Unsupported browser',
      okText: 'OK',
      onCancel: () => null,  // To prevent expection
      content: <div>
        <p>
          Unfortunately not all features in the page work with your browser.
          For the best user experience, you should use Chrome, Firefox or Safari. The page is also
          functional with IE11+ browsers, but some features are missing.
        </p>

        <p>
          If you still want to continue, press OK.
        </p>

        <Checkbox
          className="App__unsupported-checkbox"
          name="dismissUnsupported"
          onChange={this._onDismissUnsupportedChange}
        >
          Don't show this again
        </Checkbox>
      </div>,
    });
  };

  _alertIfBackendDown = () => {
    assertHealth()
      .catch(err => this._showBackendDown());
  };

  _showBackendDown = () => {
    Modal.error({
      title: 'Unable to connect order system',
      okText: 'OK',
      onCancel: () => null,  // To prevent expection
      content: <div>
        <p>
          This means you can't safely order a poster at this time. You could
          try to reload the page.
        </p>

        <p>
          Our engineers have been notified
          about the incident and you can be sure we'll fix it as soon as
          possible.
        </p>

        <p>
          We're sorry for the inconvenience. If the problem persists,
          please contact our support at
          <a target="_blank" rel="noopener noreferrer" href="mailto:help@alvarcarto.com"> help@alvarcarto.com</a>.
        </p>
      </div>,
    });
  };

  _onDismissUnsupportedChange = (event) => {
    const { checked } = event.target;
    saveDismissUnsupported(checked ? 'true' : 'false');
  };
}

function shouldShowUnsupported() {
  return getStorageSafe('alvar_dismiss_unsupported') !== 'true';
}

function saveDismissUnsupported(value) {
  return setStorageSafe('alvar_dismiss_unsupported', value);
}

export default connect(state => ({ globalState: state }))(App);
