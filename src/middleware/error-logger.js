const _ = require('lodash');
const logger = require('../util/logger')(__filename);

function createErrorLogger(opts) {
  opts = _.merge({
    logRequest: status => {
      return status >= 400 && status !== 404 && status !== 503;
    },
    logStackTrace: status => {
      return status >= 500 && status !== 503;
    }
  }, opts);

  return function errorHandler(err, req, res, next) {
    var status = err.status ? err.status : 500;
    var log = getLogFunc(status);

    if (opts.logRequest(status)) {
      logRequestDetails(log, req, status);
    }

    if (opts.logStackTrace(status)) {
      log(err, err.stack);
    }
    else {
      log(err.toString());
    }

    next(err);
  };
}

function getLogFunc(status) {
  return status >= 500 ? logger.error : logger.warn;
}

function logRequestDetails(log, req, status) {
  log('Request headers:', deepSupressLongStrings(req.headers));
  log('Request parameters:', deepSupressLongStrings(req.params));
  log('Request body:', deepSupressLongStrings(req.body));
}

function deepSupressLongStrings(obj) {
  let newObj = {};
  _.each(obj, (val, key) => {
    if (_.isString(val) && val.length > 100) {
      newObj[key] = val.slice(0, 100) + '... [CONTENT SLICED]';
    } else if (_.isPlainObject(val)) {
      return deepSupressLongStrings(val);
    } else {
      newObj[key] = val;
    }
  });

  return newObj;
}

module.exports = createErrorLogger;
