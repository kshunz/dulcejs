define(['Cake/util/inflector'], function (inflector) {


  function Model(modelName) {

    modelName = inflector.underscore(modelName);

    var modelFileName = 'model/' + modelName;

    require([modelFileName], function (modelData) {
        console.log(modelData);
    });

  }

  return Model;
});