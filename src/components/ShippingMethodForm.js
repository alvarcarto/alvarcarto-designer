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
              <Radio value="free">Worldwide Express Mail</Radio>
            </Radio.Group>
            <div className="ShippingMethodForm__radio-info">
              Incredibly fast shipping. Delivery to your nearest post office.

              <div className="ShippingMethodForm__radio-info-estimates">
                <span>Average delivery times:</span>
                <ul>
                  <li>Finland: 2-5 business days</li>
                  <li>Europe: 2-5 business days</li>
                  <li>US: 3-6 business days</li>
                  <li>Other: 3-7 business days</li>
                </ul>
              </div>
            </div>
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
