module.exports = function() {
  return function(currentRoute) {
    if (currentRoute) {
      currentRoute = currentRoute.split('/').filter(function(char) {
        return char !== ""
      });

      var ctrl = currentRoute.shift(),
          action = currentRoute.shift() || 'index',
          dynamicConfig = {};

      dynamicConfig.controller = [ctrl, 'Controller'].join('');
      dynamicConfig.action = action;

      return dynamicConfig;
    }
  };
};
