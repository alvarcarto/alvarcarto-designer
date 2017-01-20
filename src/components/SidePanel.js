import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import AlvarMapDesignPanel from './AlvarMapDesignPanel';
import PricePanel from './PricePanel';
import './SidePanel.css';

const SidePanel = React.createClass({
  render() {
    let className = 'SidePanel';
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
