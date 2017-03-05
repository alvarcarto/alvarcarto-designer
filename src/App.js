import React from 'react';
import _ from 'lodash';
import config from './config';
import { connect } from 'react-redux';
import { setLocation } from './actions';
import EditorPage from './components/EditorPage';
import CheckoutPage from './components/CheckoutPage';
import ThankYouPage from './components/ThankYouPage';
import { initialState } from './reducers';
import history from './history';

const App = React.createClass({
  componentDidMount() {
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
      case '/thank-you':
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
});

export default connect(state => ({ globalState: state }))(App);
