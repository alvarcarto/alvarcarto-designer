import React from 'react';
import './Accordion.css';

const Accordion = React.createClass({
  getDefaultProps() {
    return { alwaysOpen: true };
  },

  getInitialState() {
    return {
      selected: this.props.selected
    };
  },

  render() {
    const children = this.props.children.map(this._createSection);

    return (
      <div className="Accordion">
        {children}
      </div>
    );
  },

  _createSection(child, index) {
    return React.cloneElement(child, {
      key: index,
      index: index,
      highlight: index <= this.state.selected,
      selected: index === this.state.selected,
      onSelect: this._onSelect
    });
  },

  _onSelect(index) {
    const alreadySelected = this.state.selected === index;
    if (!alreadySelected || this.props.alwaysOpen) {
      this.setState({ selected: index });
    } else {
      this.setState({ selected: null });
    }
  }
});

Accordion.Section = React.createClass({
  render() {
    let className = 'Accordion__section';
    if (this.props.selected) {
      className += ' Accordion__section--selected'
    }
    if (this.props.highlight) {
      className += ' Accordion__section--highlight'
    }

    return (
      <div className={className}>
        <div className="Accordion__header noselect" onClick={this._onSelect}>
          <div className="Accordion__progress-line"></div>
          <div className="Accordion__header-number">
            {this.props.index + 1}
          </div>

          <h3>
            {this.props.header}
          </h3>
        </div>

        <div className="Accordion__content">
          {this.props.children}
        </div>
      </div>
    );
  },

  _onSelect() {
    this.props.onSelect(this.props.index);
  }
});

export default Accordion;
