import React from 'react';
import _ from 'lodash';
import config from './config';
import { connect } from 'react-redux';
import LightWall from './components/LightWall';
import SidePanel from './components/SidePanel';
import './App.css';
import { initialState } from './reducers';

const App = React.createClass({
  componentDidMount() {
    if (!config.DEVELOPMENT) {
      window.onbeforeunload = this._beforeLeavePage;
    }
  },

  render() {
    let className = 'App';
    const { globalState } = this.props;

    const isCheckout = globalState.viewState === 'checkout';
    if (isCheckout) {
      className += ' App--checkout';
    }

    return (
      <div className={className}>
        <div className="App__layout">
          <SidePanel />
          <LightWall />
        </div>
      </div>
    );
  },

  _beforeLeavePage() {
    const importantFields = [
      'viewState',
      'mapStyle',
      'orientation',
      'size',
      'labelHeader',
      'labelSmallHeader',
      'labelText',
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
