import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Input, Form, Row, Col, Icon } from 'antd';
import config from '../config';
import { stripeInstance } from '../util/stripe';

const ELEMENTS_STYLE = {
  base: {
    color: '#303238',
    fontSize: '14px',
    fontFamily: 'Courier, sans-serif',
    fontSmoothing: 'antialiased',
    '::placeholder': {
      color: '#ccc',
    },
  }
};
const ACCEPTED_CARD_TYPES = [
  'visa',
  'mastercard',
  'amex',
];
// http://stackoverflow.com/questions/42262887/enabling-brand-icon-in-cardnumber-type-element-in-stripe
const CARD_TYPE_TO_LABEL = {
  visa: 'Visa',
  mastercard: 'Mastercard',
  amex: 'American Express',
  discover: 'Discover',
  diners: 'Diner\'s',
  jcb: 'JCB',
  unknown: 'Unknown',
};

class CreditCardForm extends React.Component {
  state = {
    values: {
      nameOnCard: null,
    },
    shouldValidate: {
      nameOnCard: this.props.validate,
      cardNumber: this.props.validate,
      cardExpiry: this.props.validate,
      cardCvc: this.props.validate,
    },
    elementsErrors: {
      nameOnCard: null,
      cardNumber: new Error('Credit card number is required.'),
      cardExpiry: new Error('Expiry date is required.'),
      cardCvc: new Error('CVC is required.'),
    },
    elements: {
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
    },
    cardType: 'unknown',
  };

  componentDidMount() {
    const elements = stripeInstance.elements();
    const numberContainer = ReactDOM.findDOMNode(this.refs['cc-number']);
    const cardNumber = elements.create('cardNumber', {
      style: ELEMENTS_STYLE,
    });
    cardNumber.mount(numberContainer);
    cardNumber.on('change', this._onCardNumberChange);

    const expiryContainer = ReactDOM.findDOMNode(this.refs['cc-expiry']);
    const cardExpiry = elements.create('cardExpiry', {
      style: ELEMENTS_STYLE,
    });
    cardExpiry.mount(expiryContainer);
    cardExpiry.on('change', this._onCardExpiryChange);

    const cvcContainer = ReactDOM.findDOMNode(this.refs['cc-cvc']);
    const cardCvc = elements.create('cardCvc', {
      style: ELEMENTS_STYLE,
    });
    cardCvc.mount(cvcContainer);
    cardCvc.on('change', this._onCardCvcChange);

    this.setState({ elements: {
      cardNumber,
      cardExpiry,
      cardCvc,
    }});
  }

  UNSAFE_componentWillUnmount() {
    this.state.elements.cardNumber.off('change', this._onCardNumberChange);
    this.state.elements.cardExpiry.off('change', this._onCardNumberChange);
    this.state.elements.cardCvc.off('change', this._onCardNumberChange);
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 24, sm: { span: 7 }, md: { span: 7 }, lg: { span: 7 } },
      wrapperCol: { span: 24, sm: { span: 14 }, md: { span: 14 }, lg: { span: 14 } },
    };
    const formErrors = this._getFormErrors(this.props.validate);
    const cardType = this.state.cardType;

    let className = 'CreditCardForm';
    if (this.props.validate) {
      className += ' CreditCardForm--validate';
    }

    return (
      <div className={className}>
        <Form.Item {...formErrors['nameOnCard']} {...formItemLayout} required label="Name on card">
          <Input
            name="name"
            defaultValue={_.get(this.state.values, 'nameOnCard')}
            onBlur={this._onNameBlur}
            onChange={this._onNameChange}
            placeholder="Full name"
          />
        </Form.Item>

        <Form.Item {...formErrors['cardNumber']} {...formItemLayout} required label="Card number">
          <div className="CreditCardForm__number-wrapper">
            <div ref="cc-number" className="CreditCardForm__number"></div>
            <Icon className="CreditCardForm__number-icon" type="lock" />
          </div>
        </Form.Item>

        <Form.Item
          {...formErrors['cardExpiry']}
          {...formItemLayout}
          required
          label="Expiry date"
          className="CreditCardForm__expiry-date"
        >
          <div ref="cc-expiry" className="CreditCardForm__expiry"></div>
        </Form.Item>

        <Form.Item
          {...formErrors['cardCvc']}
          {...formItemLayout}
          required
          label="CVC"
        >
          <div ref="cc-cvc" className="CreditCardForm__cvc"></div>
        </Form.Item>

        <Row>
          <Col {...formItemLayout.labelCol}></Col>
          <Col {...formItemLayout.wrapperCol}>
            <ul className="CreditCardForm__logos">
              <li className={cardType === 'visa' ? 'CreditCardForm__logo--highlight' : ''}>
                <img
                  src={`${config.PUBLIC_URL}/assets/card-logo-visa.svg`}
                  alt="Visa"
                />
              </li>
              <li className={cardType === 'mastercard' ? 'CreditCardForm__logo--highlight' : ''}>
                <img
                  src={`${config.PUBLIC_URL}/assets/card-logo-mastercard.svg`}
                  alt="MasterCard"
                />
              </li>
              <li className={cardType === 'amex' ? 'CreditCardForm__logo--highlight' : ''}>
                <img
                  src={`${config.PUBLIC_URL}/assets/card-logo-amex.svg`}
                  alt="American Express"
                />
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }

  _getFormErrors = (validateAll) => {
    const formErrors = {};
    _.forEach(this.state.elementsErrors, (err, key) => {
      const shouldValidate = validateAll ? true : this.state.shouldValidate[key];
      if (!shouldValidate) {
        return;
      }

      if (_.isError(err)) {
        formErrors[key] = {
          validateStatus: 'error',
          help: err.message,
        };
      }
    });

    const shouldValidateName = validateAll ? true : this.state.shouldValidate.nameOnCard;
    if (shouldValidateName && _.isEmpty(this.state.values.nameOnCard)) {
      formErrors.nameOnCard = {
        validateStatus: 'error',
        help: 'Name on card is required.',
      };
    }

    return formErrors;
  };

  _onNameChange = (event) => {
    const { value } = event.target;

    this.setState((state) => ({
      values: _.extend(state.values, {
        nameOnCard: value
      }),
    }));
  };

  _onNameBlur = (event) => {
    this.setState((state) => ({
      shouldValidate: _.extend(state.shouldValidate, {
        nameOnCard: true
      }),
    }));
  };

  _onCardNumberChange = (event) => {
    const cardType = event.brand;
    const cardLabel = CARD_TYPE_TO_LABEL[cardType];
    if (event.complete && !_.includes(ACCEPTED_CARD_TYPES, cardType)) {
      let message = `Unfortunately we can't accept "${cardLabel}" cards.`;
      message += ' Visa, Mastercard and American Express are supported by Stripe in Europe.';
      const err = new Error(message);
      event.error = err;
    }

    this._onElementsChange('cardNumber', event);

    this.setState({
      cardType: event.brand,
    });
  };

  _onCardExpiryChange = (event) => {
    this._onElementsChange('cardExpiry', event);
  };

  _onCardCvcChange = (event) => {
    this._onElementsChange('cardCvc', event);
  };

  _onElementsChange = (name, event) => {
    const state = this.state;

    if (!event.error) {
      return this.setState({
        elementsErrors: _.extend(state.elementsErrors, {
          [name]: null,
        }),
        shouldValidate: _.extend(state.shouldValidate, {
          [name]: false,
        }),
      }, this._emitOnChange);
    }

    return this.setState({
      elementsErrors: _.extend(state.elementsErrors, {
        [name]: new Error(_.get(event, 'error.message')),
      }),
      shouldValidate: _.extend(state.shouldValidate, {
        [name]: true,
      }),
    }, this._emitOnChange);
  };

  _hasFormErrors = () => {
    const errs = this._getFormErrors(true);
    return _.keys(errs).length > 0;
  };

  _emitOnChange = () => {
    const isValid = !this._hasFormErrors();

    this.props.onChange({
      isValid,
      element: this.state.elements.cardNumber,
      values: this.state.values,
    });
  };
}

export default CreditCardForm;
