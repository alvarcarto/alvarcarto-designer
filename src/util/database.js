const databaseConfig = require('../../knexfile').config;
const Knex = require('knex');

module.exports = {
  knex: Knex(databaseConfig),
  config: databaseConfig,
};
