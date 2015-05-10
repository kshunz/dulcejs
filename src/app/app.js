module.exports = function() {
  var appMethods = require('./prototype');

  appMethods = appMethods || {};

  function App() {}

  Object.keys(appMethods).forEach(function (appMethodName) {
    App.prototype[appMethodName] = appMethods[appMethodName];
  });

  return new App();
};
