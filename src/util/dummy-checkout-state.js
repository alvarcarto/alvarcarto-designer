// eslint-disable

const DUMMY_DATA = {
  "billingAddressForm": null,
  "creditCardForm": null,
  "emailForm": {
    "isValid": true,
    "values": {
      "email": "john.doe@gmail.com"
    }
  },
  "shippingAddressForm": {
    "isValid": true,
    "values": {
      "streetAddress": "Mannerheimintie 1",
      "city": "Helsinki",
      "countryCode": "FI",
      "personName": "John Doe",
      "contactPhone": "0501234567",
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