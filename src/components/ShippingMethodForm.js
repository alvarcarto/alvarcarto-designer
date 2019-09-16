import React from 'react';
import _ from 'lodash';
import Alert from './Alert'
import { Radio, Row, Col, Icon } from 'antd';

class ShippingMethodForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      values: {
        shippingMethod: _.get(props, 'initialState.values.shippingMethod', 'free'),
      },
      shouldValidate: {
        shippingMethod: false,
      },
    };
  }

  render() {
    let deliveryPhrase = '';
    let deliveryCompany = 'DHL (outside Finland) or Matkahuolto (in Finland)';
    if (this.props.countryCode && this.props.countryCode === 'FI') {
      deliveryPhrase = 'Delivery to your nearest Matkahuolto service point.';
      deliveryCompany = 'Matkahuolto';
    } else if (this.props.countryCode) {
      deliveryPhrase = 'Delivery to your front door.';
      deliveryCompany = 'DHL';
    }

    return (
      <div className="ShippingMethodForm">
        <Radio.Group value={this.state.values.shippingMethod} onChange={this._onChange}>
          <Row className="ShippingMethodForm__item">
            <Alert type="warning" className="ShippingMethodForm__delivery-warning">
              Please note that during the holiday seasons our delivery times are slightly longer.
            </Alert>

            <Col span={16}>
              <Radio value="free">Worldwide Express Mail</Radio>
              <div className="ShippingMethodForm__radio-info">
                Regular production speed. Incredibly fast express shipping by {deliveryCompany}. {deliveryPhrase}{' '}
                Includes parcel tracking.

                <div className="ShippingMethodForm__radio-info-estimates">
                  <span>Average delivery times:</span>
                  <ul>
                    <li>Finland: 3-6 business days</li>
                    <li>Europe: 3-6 business days</li>
                    <li>US: 4-7 business days</li>
                    <li>Other: 5-8 business days</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={5} className="ShippingMethodForm__right-col">
              <span className="ShippingMethodForm__item-price">0 €</span>
            </Col>
          </Row>
          <Row className="ShippingMethodForm__item">
            <Col span={16}>
              <Radio value="fast">Worldwide Express Mail <span className="ShippingMethodForm__priority-label">+ Priority Production</span></Radio>
              <div className="ShippingMethodForm__radio-info">
                Production on the same day when ordered before 12:00 Europe/Helsinki time.
                Incredibly fast express shipping by {deliveryCompany}. {deliveryPhrase}{' '}
                Includes parcel tracking.

                <div className="ShippingMethodForm__radio-info-estimates">
                  <span>Average delivery times:</span>
                  <ul>
                    <li>Finland: 1-3 business days</li>
                    <li>Europe: 1-3 business days</li>
                    <li>US: 2-4 business days</li>
                    <li>Other: 2-5 business days</li>
                  </ul>

                </div>
              </div>
            </Col>
            <Col span={5} className="ShippingMethodForm__right-col">
              <span className="ShippingMethodForm__item-price">15 €</span>
            </Col>
          </Row>
        </Radio.Group>
      </div>
    );
  }

  _onChange = (e) => {
    const { value } = e.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        shippingMethod: value
      }),
    }), this._emitChange);
  };

  _emitChange = () => {
    this.props.onChange({
      isValid: true,
      values: this.state.values,
    });
  };
}

export default ShippingMethodForm;
