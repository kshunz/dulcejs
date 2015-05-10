module.exports = function() {
  var methods = require('./prototype');

  methods = methods || {};

  function Core() {}

  Object.keys(methods).forEach(function (method) {
    Core.prototype[method] = methods[method];
  });

  return new Core();
};
