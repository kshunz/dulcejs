define(['Cake/app/contents'], function (appMethods) {

  appMethods = appMethods || {};

  function App() {
  }

  Object.keys(appMethods).forEach(function (appMethodName) {
    App.prototype[appMethodName] = appMethods[appMethodName];
  });

  return App;
});