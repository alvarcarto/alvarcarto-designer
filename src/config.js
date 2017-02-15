/* eslint-disable no-process-env */

// Env vars should be casted to correct types
const config = {
  // Must match to nginx config
  PORT: 9000,
  NODE_ENV: process.env.NODE_ENV,
  LOG_LEVEL: process.env.LOG_LEVEL,
};

module.exports = config;
