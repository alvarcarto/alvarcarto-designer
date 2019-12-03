import React from 'react';
import ReactDOM from 'react-dom';
import HubspotOdometer from 'odometer';

window.odometerOptions = {
  auto: false,
  duration: 1000,
};

class Odometer extends React.Component {
  state = { odometer: null };

  componentDidMount() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.odometer = new HubspotOdometer({
      el: ReactDOM.findDOMNode(this.refs.container),
      ...this.props,
      value: 0,
    });

    setTimeout(() => {
      this.state.odometer.update(this.props.value);
    }, 50);
  }

  componentDidUpdate() {
    if (this.state.odometer) {
      this.state.odometer.update(this.props.value);
    }
  }

  render() {
    return <div className="Odometer" ref="container"></div>;
  }
}

export default Odometer;
