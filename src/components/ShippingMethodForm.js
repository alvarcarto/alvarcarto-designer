import React from 'react';
import _ from 'lodash';
import { Radio, Row, Col } from 'antd';

const ShippingMethodForm = React.createClass({
  render() {
    return (
      <div className="ShippingMethodForm">
        <Row>
          <Col span={13}>
            <Radio.Group value="free">
              <Radio value="free">Worldwide Priority Mail</Radio>
            </Radio.Group>
            <div className="ShippingMethodForm__radio-info">Delivered in 3-14 days to your nearest post office.</div>
          </Col>
          <Col span={8} className="ShippingMethodForm__right-col">
            <span className="ShippingMethodForm__item-price">0 €</span>
          </Col>
        </Row>
      </div>
    );
  }
});

export default ShippingMethodForm;
