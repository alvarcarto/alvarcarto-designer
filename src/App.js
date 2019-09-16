/* global Modernizr */

import React from 'react';
import _ from 'lodash';
import { Checkbox, Modal } from 'antd';
import config from './config';
import { connect } from 'react-redux';
import { setLocation } from './actions';
import { getStorageSafe, setStorageSafe } from './util';
import EditorPage from './components/EditorPage';
import CheckoutPage from './components/CheckoutPage';
import GiftCardPage from './components/GiftCardPage';
import ThankYouPage from './components/ThankYouPage';
import { initialState } from './reducers';
import { assertHealth } from './util/api';
import history from './history';

class App extends React.Component {
  componentDidMount() {
    const shouldShow = shouldShowUnsupported();
    if (shouldShow && !Modernizr.flexbox) {
      this._showUnsupportedWarning();
    }

    // Listen for changes to the current location.
    history.listen((location, action) => {
      window.scrollTo(0, 0);
      this.props.dispatch(setLocation(location));
    });

    if (!config.DEVELOPMENT) {
      window.onbeforeunload = this._beforeLeavePage;
      this._alertIfBackendDown();
    }
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
        <div style={{height: 0, width: 0, visibility: 'hidden', opacity: 0}}>
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
          Unfortunately this page doesn't work well with your browser.
          For best user experience, you should use Chrome, Firefox, Safari, IE11+, or
          Opera browser.
        </p>

        <p>
          If you still want to view the possibly broken page layout,
          press OK.
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
          <a target="_blank" href="mailto:help@alvarcarto.com"> help@alvarcarto.com</a>.
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
