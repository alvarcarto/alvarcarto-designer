import _ from 'lodash';
import React from 'react';
import { setMapLabels } from '../actions';
import { Form, Input, Switch, Checkbox } from 'antd';

const formColLabel = { span: 6, md: { span: 6 }, lg: { span: 6 } };
const formColInput = { span: 18, md: { span: 18 }, lg: { span: 18 } };

const PosterLabelInputs = React.createClass({
  render() {
    const { labels } = this.props;
    const { autoUpdateCoordinates } = labels;

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

          {
            _.includes(labels.showLabels, 'header')
              ? <Form.Item
                  labelCol={formColLabel}
                  wrapperCol={formColInput}
                  label="Header"
                >
                  <Input disabled={!labels.enabled} placeholder="Header" value={labels.header} onChange={this._onHeaderChange} />
                </Form.Item>
              : null
          }

          {
            _.includes(labels.showLabels, 'smallHeader')
              ? <Form.Item
                  labelCol={formColLabel}
                  wrapperCol={formColInput}
                  label="Small header"
                >
                  <Input disabled={!labels.enabled} placeholder="Small header" value={labels.smallHeader} onChange={this._onSmallHeaderChange} />
                </Form.Item>
              : null
          }

          {
            _.includes(labels.showLabels, 'text')
              ? <Form.Item
                  className="PosterLabelInputs__text"
                  labelCol={formColLabel}
                  wrapperCol={formColInput}
                  label="Text"
                >
                  <Checkbox
                    disabled={!labels.enabled}
                    checked={autoUpdateCoordinates}
                    onChange={this._onAutoUpdateCoordinatesChange}
                  >
                    Use map center coordinate as text
                  </Checkbox>
                  <Input
                    disabled={!labels.enabled || autoUpdateCoordinates}
                    placeholder="Text"
                    value={labels.text}
                    onChange={this._onTextChange}
                  />
                </Form.Item>
              : null
          }
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
  },

  _onAutoUpdateCoordinatesChange(event) {
    this.props.dispatch(setMapLabels({
      autoUpdateCoordinates: event.target.checked,
    }));
  }
});

export default PosterLabelInputs;
