const _ = require('lodash');
const moment = require('moment');
const BPromise = require('bluebird');
const ADDRESS_TYPE = require('../enums/address-type');
const { knex } = require('../util/database');

function createOrder(order) {
  return knex.transaction(trx =>
    _createOrder(order, { trx })
      .tap(orderRow => _createOrderedPosters(orderRow.id, order.cart, { trx }))
      .tap((orderRow) => {
        const address = _.merge({}, order.shippingAddress, {
          type: ADDRESS_TYPE.SHIPPING,
        });
        return _createAddress(orderRow.id, address, { trx });
      })
      .tap((orderRow) => {
        if (!order.billingAddress) {
          return BPromise.resolve();
        }

        const address = _.merge({}, order.billingAddress, {
          type: ADDRESS_TYPE.BILLING,
        });
        return _createAddress(orderRow.id, address, { trx });
      }),
  );
}

function _createOrder(order, opts = {}) {
  const trx = opts.trx || knex;

  return trx('orders').insert({
    customer_email: order.email,
    email_subscription: order.emailSubscription,
    stripe_token_id: order.stripeResponse.id,
    stripe_token_response: order.stripeResponse,
    charge_succeeded_at: moment().toISOString(),
    sent_to_production_at: null,
  })
    .returning('*');
}

function _createAddress(orderId, address, opts = {}) {
  const trx = opts.trx || knex;

  return trx('addresses').insert({
    type: address.type,
    order_id: orderId,
    person_name: address.name,
    street_address: address.address,
    street_address_extra: address.addressExtra,
    city: address.city,
    postal_code: address.postalCode,
    country_code: address.country,
    state: address.state,
    contact_phone: address.phone,
  })
    .returning('*');
}

function _createOrderedPosters(orderId, cart, opts = {}) {
  const trx = opts.trx || knex;

  return BPromise.map(cart, item =>
    trx('ordered_posters').insert({
      order_id: orderId,
      quantity: item.quantity,
      unit_customer_price: 1000,  // TODO
      unit_internal_price: 100,  // TODO
      map_center_lat: item.mapCenter.lat,
      map_center_lng: item.mapCenter.lng,
      map_zoom: item.mapZoom,
      map_style: item.mapStyle,
      map_pitch: item.mapPitch,
      map_bearing: item.mapBearing,
      size: item.size,
      labels_enabled: item.labelsEnabled,
      label_header: item.labelHeader,
      label_small_header: item.labelSmallHeader,
      label_text: item.labelText,
    }),
    { concurrency: 1 },
  );
}

module.exports = {
  createOrder,
};
