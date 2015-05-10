module.exports = function() {
  var methods = require('./prototype');

  methods = methods || {};

  function Util() {}

  Object.keys(methods).forEach(function (method) {
    Util.prototype[method] = methods[method];
  });

  return new Util();
};
