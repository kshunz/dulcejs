define([], function () {

  return function (controllerName, actionName, filePath) {
    console.error(controllerName, 'has no action named', "'" + actionName + "'");
    console.warn('Please add an action method named', "'" + actionName + "'", 'to the', "'" + filePath + "'", 'file');
  };

});