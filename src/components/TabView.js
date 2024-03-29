import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd';
import UnstyledButton from './UnstyledButton';

class TabView extends React.Component {
  static defaultProps = { alwaysOpen: false };

  constructor(props) {
    super(props)

    this.state = {
      selected: props.initialSelected,
    };
  }

  render() {
    const panelButtons = this.props.children.map(this._createPanelButton);
    const panels = this.props.children.map(this._createPanel);

    return (
      <div className="TabView">
        <div className="TabView__panel-select">
          {panelButtons}
        </div>

        <div className="TabView__panels">
          {panels}
        </div>
      </div>
    );
  }

  _onSelect = (index) => {
    const alreadySelected = this.state.selected === index;
    if (!alreadySelected || this.props.alwaysOpen) {
      this.setState({ selected: index });
    } else {
      this.setState({ selected: null });
    }
  };

  _onClose = (index) => {
    this.setState({ selected: null });
  };

  _createPanel = (child, index) => {
    return React.cloneElement(child, {
      key: index,
      index: index,
      selected: index === this.state.selected,
      onClose: this._onClose,
    });
  };

  _createPanelButton = (child, index) => {
    return <PanelSelectButton
      key={index}
      index={index}
      header={child.props.header}
      selected={index === this.state.selected}
      onSelect={this._onSelect}
    />;
  };
}

TabView.Panel = class extends React.Component {
  state = {
    contentHeight: 0,
  };

  componentDidMount() {
    this._setHeightState();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selected) {
      this._setHeightState();
    }
  }

  render() {
    let className = 'TabView__panel';
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    const style = {};
    if (this.props.selected) {
      style.transform = `translateY(-${this.state.contentHeight + 100}px)`;
    }

    return (
      <div className={className} style={style} ref={(div) => this.div = div}>
        <div className="TabView__panel-close-container">
          <UnstyledButton onClick={this._onClose}>
            <Icon className="bounce" type="down" />
          </UnstyledButton>
        </div>
        <div className="TabView__panel-content">
          <div ref={(div) => this.contentDiv = div}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  _setHeightState = () => {
    const contentDivEl = ReactDOM.findDOMNode(this.contentDiv);
    this.setState({ contentHeight: contentDivEl.clientHeight });
  };

  _onClose = () => {
    this.props.onClose(this.props.index);
  };
};

class PanelSelectButton extends React.Component {
  render() {
    let className = 'TabView__panel-select-button';
    if (this.props.selected) {
      className += ' TabView__panel-select-button--selected'
    }
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return (
      <div className={className}>
        <UnstyledButton onClick={this._onSelect}>
          {this.props.header}
        </UnstyledButton>
      </div>
    );
  }

  _onSelect = () => {
    this.props.onSelect(this.props.index);
  };
}

export default TabView;
