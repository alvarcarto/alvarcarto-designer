import React from 'react';
import { connect } from 'react-redux';

const ThankYouPage = React.createClass({
  render() {
    return (
      <div className="ThankYouPage">
        <h1>Thank you</h1>
      </div>
    );
  }
});

export default connect(state => ({ globalState: state }))(ThankYouPage);
