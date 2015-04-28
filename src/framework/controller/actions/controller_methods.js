define(['./delete', './add', './view', './index', './edit', './missing_action'],
  function (deleteAction, addAction, viewAction, indexAction, editAction, missingAction) {

    return {
      delete: deleteAction,
      add: addAction,
      view: viewAction,
      index: indexAction,
      edit: editAction,
      missingAction: missingAction,
      missingController: function (controllerName, controllerFileName) {
        console.error(controllerName, 'does not exist!');
        console.warn('Please create a controller file named', "'" + controllerFileName + "'");
      }
    };

  });