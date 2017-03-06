/* global Modernizr */

import React from 'react';
import _ from 'lodash';
import { Checkbox, Button, Modal } from 'antd';
import config from './config';
import { connect } from 'react-redux';
import { setLocation } from './actions';
import { getStorageSafe, setStorageSafe } from './util';
import EditorPage from './components/EditorPage';
import CheckoutPage from './components/CheckoutPage';
import ThankYouPage from './components/ThankYouPage';
import { initialState } from './reducers';
import history from './history';

const App = React.createClass({
  componentDidMount() {
    const shouldShow = shouldShowUnsupported();
    const hasFlexbox = Modernizr.flexbox || Modernizr.flexboxtweener;
    if (shouldShow && !hasFlexbox) {
      this._showUnsupportedWarning();
    }

    // Listen for changes to the current location.
    history.listen((location, action) => {
      this.props.dispatch(setLocation(location));
    });

    if (!config.DEVELOPMENT) {
      window.onbeforeunload = this._beforeLeavePage;
    }
  },

  render() {
    const { globalState } = this.props;

    let page;

    switch (_.trimEnd(globalState.location.pathname, '/')) {
      case '/checkout':
        page = <CheckoutPage />;
        break;
      case '/thankyou':
        page = <ThankYouPage />;
        break;
      default:
        page = <EditorPage />;
        break;
    }

    return (
      <div className="App">
        <div className="App__layout">
          {page}
        </div>
      </div>
    );
  },

  _beforeLeavePage() {
    const importantFields = [
      'location',
      'cart',
    ];

    const userHasMadeChanges = !_.isEqual(
      _.pick(initialState, importantFields),
      _.pick(this.props.globalState, importantFields),
    );
    if (userHasMadeChanges) {
      return 'Do you want to leave this site?';
    }
  },

  _showUnsupportedWarning() {
    Modal.warning({
      title: 'Unsupported browser',
      okText: 'OK',
      content: <div>
        <p>
          Unfortunately this page doesn't work well with your browser.
          For best user experience, you should use IE10+, Chrome, Firefox or
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
  },

  _onDismissUnsupportedChange(event) {
    const { name, checked } = event.target;
    saveDismissUnsupported(checked ? 'true' : 'false');
  }
});

function shouldShowUnsupported() {
  return getStorageSafe('alvar_dismiss_unsupported') !== 'true';
}

function saveDismissUnsupported(value) {
  return setStorageSafe('alvar_dismiss_unsupported', value);
}

export default connect(state => ({ globalState: state }))(App);
