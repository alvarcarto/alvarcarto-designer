const React = require('react');
const ReactDOM = require('react-dom');
const HubspotOdometer = require('odometer');

window.odometerOptions = {
  auto: false,
  duration: 1000,
};

const Odometer = React.createClass({
  getInitialState() {
    return { odometer: null };
  },

  componentDidMount() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.odometer = new HubspotOdometer({
      el: ReactDOM.findDOMNode(this.refs.container),
      value: 0,
    });

    setTimeout(() => {
      this.state.odometer.update(this.props.value);
    }, 50);
  },

  componentDidUpdate() {
    if (this.state.odometer) {
      this.state.odometer.update(this.props.value);
    }
  },

  render() {
    return <div className="Odometer" ref="container"></div>;
  }
})

module.exports = Odometer;