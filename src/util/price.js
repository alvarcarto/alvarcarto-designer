import _ from 'lodash';

function calculatePrice(size) {
  switch (size) {
    case '50x70cm':
      return { value: 45, currency: 'EUR' };
    case '70x100cm':
      return { value: 55, currency: 'EUR' };
    case '30x40cm':
      return { value: 35, currency: 'EUR' };
    default:
      return { value: null, currency: 'EUR' };
  }
}

// TODO: Use currency lib
const symbols = {
  EUR: '\u20AC',
};

function getCurrencySymbol(currency) {
  if (!_.has(symbols, currency.toUpperCase())) {
    throw new Error(`Unknown currency: ${currency}`);
  }

  return symbols[currency.toUpperCase()];
}

module.exports = {
  calculatePrice,
  getCurrencySymbol,
};