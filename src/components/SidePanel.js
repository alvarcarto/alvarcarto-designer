import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Tooltip, Badge } from 'antd';
import AlvarMapDesignPanel from './AlvarMapDesignPanel';
import PricePanel from './PricePanel';
import MiniCart from './MiniCart';

class SidePanel extends React.Component {
  render() {
    const { globalState } = this.props;
    const itemCount = _.reduce(globalState.cart, (memo, item) => memo + item.quantity, 0);

    return (
      <div className="SidePanel">
        <AlvarMapDesignPanel
          className="SidePanel__upper"
          dispatch={this.props.dispatch}
          globalState={globalState}
        />
        <div className="SidePanel__middle">
          <MiniCart dispatch={this.props.dispatch} globalState={globalState} />
          <div className="SidePanel__badge">
            <Tooltip title={`You have ${itemCount} maps in your order.`}>
              <Badge count={itemCount} />
            </Tooltip>
          </div>
        </div>

        <div className="SidePanel__lower">
          <PricePanel dispatch={this.props.dispatch} globalState={globalState} />
        </div>
      </div>
    );
  }
}

export default connect(state => ({ globalState: state }))(SidePanel);
