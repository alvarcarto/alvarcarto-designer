import React from 'react';
import { connect } from 'react-redux';
import AlvarMapDesignPanel from './AlvarMapDesignPanel';
import PricePanel from './PricePanel';

const SidePanel = React.createClass({
  render() {
    const { globalState } = this.props;

    return (
      <div className="SidePanel">
        <AlvarMapDesignPanel
          className="SidePanel__upper"
          dispatch={this.props.dispatch}
          globalState={globalState}
        />
        <div className="SidePanel__lower">
          <PricePanel dispatch={this.props.dispatch} globalState={globalState} />
        </div>
      </div>
    );
  }
});

export default connect(state => ({ globalState: state }))(SidePanel);
