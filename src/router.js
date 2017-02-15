const Joi = require('joi');
const validate = require('express-validation');
const express = require('express');
const order = require('./http/order-http');
const {
  addressSchema,
  stripeCreateTokenResponseSchema,
  cartSchema,
} = require('./util/validation');

function createRouter() {
  const router = express.Router();
  const orderSchema = {
    body: {
      email: Joi.string().email().required(),
      emailSubscription: Joi.boolean().optional(),
      shippingAddress: addressSchema.required(),
      billingAddress: addressSchema.optional(),
      stripeResponse: stripeCreateTokenResponseSchema.required(),
      cart: cartSchema.required(),
    },
  };
  router.post('/api/orders', validate(orderSchema), order.postOrder);

  return router;
}

module.exports = createRouter;
