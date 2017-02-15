const ex = require('../util/express');
const orderCore = require('../core/order-core');

const postOrder = ex.createJsonRoute((req, res) => {
  // TODO: Create stripe charge, then
  return orderCore.render(req.body);
});

module.exports = {
  postOrder,
};
