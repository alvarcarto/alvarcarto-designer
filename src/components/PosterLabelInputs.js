import React from 'react';
import { setMapLabels } from '../actions';
import { Form, Input, Switch } from 'antd';

const formColLabel = { span: 6, md: { span: 6 }, lg: { span: 6 } };
const formColInput = { span: 18, md: { span: 18 }, lg: { span: 18 } };

const PosterLabelInputs = React.createClass({
  render() {
    const { labels } = this.props;

    return (
      <div className="PosterLabelInputs">
        <Form>
          <Form.Item
            labelCol={formColLabel}
            wrapperCol={formColInput}
            label="Print labels"
          >
            <Switch size="default" defaultChecked={labels.enabled} onChange={this._onSwitchChange} />
          </Form.Item>

          <Form.Item
            labelCol={formColLabel}
            wrapperCol={formColInput}
            label="Header"
          >
            <Input disabled={!labels.enabled} placeholder="Header" value={labels.header} onChange={this._onHeaderChange} />
          </Form.Item>

          <Form.Item
            labelCol={formColLabel}
            wrapperCol={formColInput}
            label="Small header"
          >
            <Input disabled={!labels.enabled} placeholder="Small header" value={labels.smallHeader} onChange={this._onSmallHeaderChange} />
          </Form.Item>

          <Form.Item
            labelCol={formColLabel}
            wrapperCol={formColInput}
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
