function calculatePrice(state) {
  switch (state.size) {
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

module.exports = {
  calculatePrice,
};