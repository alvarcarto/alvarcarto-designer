import _ from 'lodash';

function calculateTotalPrice(cart) {
  const total = _.reduce(cart, (memo, item) => {
    const itemPrice = calculatePrice(item);
    return {
      value: memo.value + itemPrice.value,
      currency: itemPrice.currency,
    };
  }, { value: 0, currency: null });

  total.label = _toLabel(total);
  return total;
}

function calculatePrice(item, opts = {}) {
  const price = calculateUnitPrice(item.size);

  if (!opts.onlyUnitPrice) {
    price.value *= item.quantity;
  }

  price.label = _toLabel(price);
  return price;
}

function calculateUnitPrice(size) {
  switch (size) {
    case '50x70cm':
      return { value: 49, currency: 'EUR' };
    case '70x100cm':
      return { value: 59, currency: 'EUR' };
    case '30x40cm':
      return { value: 39, currency: 'EUR' };
    default:
      throw new Error(`Invalid size: ${size}`);
  }
}

function _toLabel(price) {
  return `${price.value.toFixed(2)} ${getCurrencySymbol(price.currency)}`;
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
  calculateTotalPrice,
  calculatePrice,
  calculateUnitPrice,
  getCurrencySymbol,
};