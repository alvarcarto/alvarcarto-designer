import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './PosterLabelInputs.css';

const PosterLabelInputs = React.createClass({
  render() {
    return (
      <div className="PosterLabelInputs">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            label="Header"
          >
            <Input placeholder="Header" />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            label="Subtitle"
          >
            <Input placeholder="Subtitle" />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            label="Text"
          >
            <Input placeholder="Text" />
          </Form.Item>
        </Form>
      </div>
    );
  }
});

export default PosterLabelInputs;
