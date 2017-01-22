import React from 'react';
import { connect } from 'react-redux';
import { setMapLabels } from '../actions';
import { Form, Icon, Input, Button, Switch } from 'antd';
import './PosterLabelInputs.css';

const PosterLabelInputs = React.createClass({
  render() {
    const { labels } = this.props;

    return (
      <div className="PosterLabelInputs">
        <Form>
          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            label="Print labels"
          >
            <Switch size="default" defaultChecked onChange={this._onSwitchChange} />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            label="Header"
          >
            <Input disabled={!labels.enabled} placeholder="Header" value={labels.header} onChange={this._onHeaderChange} />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            label="Small header"
          >
            <Input disabled={!labels.enabled} placeholder="Small header" value={labels.smallHeader} onChange={this._onSmallHeaderChange} />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            label="Text"
          >
            <Input disabled={!labels.enabled} placeholder="Text" value={labels.text} onChange={this._onTextChange} />
          </Form.Item>
        </Form>
      </div>
    );
  },

  _onSwitchChange(value) {
    this.props.dispatch(setMapLabels({
      enabled: value,
    }));
  },

  _onHeaderChange(event) {
    this.props.dispatch(setMapLabels({
      header: event.target.value,
    }));
  },

  _onSmallHeaderChange(event) {
    this.props.dispatch(setMapLabels({
      smallHeader: event.target.value,
    }));
  },

  _onTextChange(event) {
    this.props.dispatch(setMapLabels({
      text: event.target.value,
    }));
  }
});

export default PosterLabelInputs;
