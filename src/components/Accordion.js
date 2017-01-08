import React from 'react';
import './Accordion.css';

const Accordion = React.createClass({
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

  _createSection(child) {
    const id = child.props.id;

    return React.cloneElement(child, {
      key: id,
      id: id,
      selected: id === this.state.selected,
      onSelect: this._onSelect
    });
  },

  _onSelect(id) {
    const idAlreadySelected = this.state.selected === id;
    if (!idAlreadySelected) {
      this.setState({ selected: id });
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

    return (
      <div className={className}>
        <h3 onClick={this._onSelect}>
          {this.props.header}
        </h3>
        <div className="Accordion__content">
          {this.props.children}
        </div>
      </div>
    );
  },

  _onSelect() {
    this.props.onSelect(this.props.id);
  }
});

export default Accordion;
