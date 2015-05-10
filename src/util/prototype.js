module.exports = function() {
  var Inflector = require('./inflector');
  var Debug = require('./debugger');

  return {
    inflector: Inflector,
    debug: Debug
  };
}();
