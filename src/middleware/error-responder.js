const http = require('http');
const _ = require('lodash');

// This reponder is assuming that all <500 errors are safe to be responded
// with their .message attribute.
// DO NOT write sensitive data into error messages.
function createErrorResponder(opts) {
  opts = _.merge({
    isErrorSafeToRespond: function(status) {
      return status < 500;
    },
  }, opts);

  return function errorResponder(err, req, res, next) {
    var message;
    var status = err.status ? err.status : 500;

    var httpMessage = http.STATUS_CODES[status];
    if (opts.isErrorSafeToRespond(status)) {
      message = httpMessage + ': ' + err.message;
    }
    else {
      message = httpMessage;
    }

    res.status(status);
    res.send({ error: message });
  };
}

module.exports = createErrorResponder;
