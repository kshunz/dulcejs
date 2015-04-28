define([], function () {
  return function (currentRoute) {
    if (currentRoute) {
      currentRoute = currentRoute.charAt(0) === '/' ? currentRoute.replace('/', '') : currentRoute;
      currentRoute = currentRoute.split('/');

      var ctrl = currentRoute.shift(),
          action = currentRoute.shift() || 'index';

      var dynamicConfig = Object.create(null);
      dynamicConfig.controller = [ctrl, 'Controller'].join('');
      dynamicConfig.action = action;

      return dynamicConfig;
    } else {
      console.warn('Why is resolveConfig being run with no route!!!');
    }
  }
});