import React from 'react';

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
        <div className="Accordion__start">
          <div className="Accordion__start-circle"></div>
          <h6 className="Accordion__start-header">
            Create your unique poster
          </h6>
        </div>

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
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return (
      <div className={className}>
        <div className="Accordion__header noselect" onClick={this._onSelect}>
          <div className="Accordion__progress-line"></div>
          <div className="Accordion__header-number">
            {this.props.index + 1}
          </div>

          <h2>
            {this.props.header}
          </h2>
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
