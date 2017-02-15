const React = require('react');

const AlvarMapLabels = React.createClass({
  render() {
    const { labels } = this.props;

    return <div className="AlvarMapLabels">
      <h2 className="AlvarMapLabels__header">{labels.header}</h2>
      <div className="AlvarMapLabels__middle">
        <h3 className="AlvarMapLabels__small-header">{labels.smallHeader}</h3>
      </div>
      <p className="AlvarMapLabels__text">{labels.text}</p>
    </div>;
  }
})

module.exports = AlvarMapLabels;