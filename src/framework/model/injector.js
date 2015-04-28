define(['Cake/util/inflector'], function (inflector) {
  return {
    injectModelsInto: function (controllerConstruct) {
      var models = [],
          modelFileName;

      models.forEach(function (modelName) {
        modelFileName = inflector.modelize(modelName).toLowerCase();

        modelFileName = 'model/' + modelFileName;

        console.log('model-file-name', modelFileName);
        require([modelFileName], function (modelData) {
          this[modelName] = modelData;
          controllerConstruct.prototype[modelName] = modelData;
        });

      });
    }
  };
});