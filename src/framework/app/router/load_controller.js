define(['Cake/util/inflector', 'Cake/controller/controller'], function (inflector, Controller) {

  return function (controller, action) {

    if (controller === 'Controller') {
      return;
    }

    var controllerFileName = 'controller/' + inflector.underscore(controller);

    require([controllerFileName], function (ctrl) {
      if (ctrl[action]) {
        console.log('Controller action being called', ctrl);
        ctrl[action]();
      } else {
				ctrl.missingAction(controller, action, controllerFileName);
      }
    }, function () {
			new Controller('MissingController').missingController(controller, controllerFileName);
    });
  };

});














