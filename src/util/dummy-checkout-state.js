// eslint-disable

const DUMMY_DATA = {
  "billingAddressForm": null,
  "creditCardForm": {
    "isValid": false,
    "values": {
      "cc-cvc": null,
      "cc-exp": {
        "month": 1,
        "year": 2020
      },
      "cc-name": "John Doe",
      "cc-number": "4242 4242 4242 4242 "
    }
  },
  "emailForm": {
    "isValid": true,
    "values": {
      "email": "john.doe@gmail.com"
    }
  },
  "shippingAddressForm": {
    "isValid": true,
    "values": {
      "address": "Mannerheimintie 1",
      "city": "Helsinki",
      "country": "FI",
      "name": "John Doe",
      "phone": "0501234567",
      "postalCode": "00100"
    }
  },
  "shouldValidate": {
    "differentBillingAddress": false,
    "emailSubscription": false,
    "termsAccepted": false
  },
  "validateAll": false,
  "values": {
    "differentBillingAddress": null,
    "emailSubscription": true,
    "termsAccepted": false
  }
};

export default DUMMY_DATA;