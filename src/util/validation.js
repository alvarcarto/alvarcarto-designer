const Joi = require('joi');

const stripeCreateTokenResponseSchema = Joi.object({
  id: Joi.string().required(),
  card: Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    exp_month: Joi.number().required(),
    exp_year: Joi.number().required(),
    last4: Joi.string().required(),
    brand: Joi.string().required(),
  }).required(),
  livemode: Joi.boolean().required(),
  client_ip: Joi.string().required(),
}).unknown();

const addressSchema = Joi.object({
  name: Joi.string().min(1).max(300).required(),
  address: Joi.string().min(1).max(300).required(),
  addressExtra: Joi.string().min(1).max(300).optional(),
  city: Joi.string().min(1).max(300).required(),
  postalCode: Joi.string().min(1).max(30).required(),
  country: Joi.string().length(2).required(),
  state: Joi.string().min(1).max(300).optional(),
  phone: Joi.string().min(1).max(300).optional(),
});

const latLngSchema = Joi.object({
  lat: Joi.number().min(-90).max(90).required(),
  lng: Joi.number().min(-180).max(180).required(),
});

const cartItemSchema = Joi.object({
  quantity: Joi.number().min(1).max(100000),
  mapCenter: latLngSchema.required(),
  mapZoom: Joi.number().min(0).max(25).required(),
  mapStyle: Joi.string().required(),
  mapPitch: Joi.number().optional(),
  mapBearing: Joi.number().min(-360).max(360).optional(),
  orientation: Joi.string().valid(['landscape', 'portrait']).required(),
  size: Joi.string().valid(['30x40cm', '50x70cm', '70x100cm']).required(),
  labelsEnabled: Joi.boolean().required(),
  labelHeader: Joi.string().min(0).max(100).required(),
  labelSmallHeader: Joi.string().min(0).max(100).required(),
  labelText: Joi.string().min(0).max(500).required(),
});

const cartSchema = Joi.array().items(cartItemSchema).min(1).max(1000);

module.exports = {
  addressSchema,
  cartItemSchema,
  cartSchema,
  stripeCreateTokenResponseSchema,
};
