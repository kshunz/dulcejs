define([
    'Cake/controller/actions/controller_methods',
    'Cake/model/model',
    'Cake/util/inflector',
    'Cake/view/view',
    'jquery'],
  function (defaultMethods, Model, inflector, View, $) {

    var renderView = View.render,
        loadViewTemplate = View.loadTemplate,
        loadViewContent = View.loadContent;

    return function Controller(name, construct) {

      construct = construct || function () {
      };

      construct.prototype = defaultMethods;

      name = name.split('Controller')[0];

      var controller = new construct();



      getModelData(name, function(data) {
        loadViewTemplate(controller).then(function (template) {
          console.log('controller name:', name);

          loadViewContent(name, 'overview').then(function (content) {
            var renderedContent = $(template),
                compiledContent = renderView(content, {info: data}),
                layoutAnchor = 'body';

            $(layoutAnchor).html(renderedContent);
            $('#content-for-layout').replaceWith(compiledContent);

          }, function (err) {
            console.error(err);
          });
        });
      });



      function getModelData(name, loadView) {
        var body,
            modelName = inflector.modelize(name),
            modelFileName = 'model/' + modelName.toLowerCase();

        require([modelFileName], function (data) {
          data = data || {};

          console.warn('Model Data:', data);

          loadView(data);

        }, function () {
          console.error(new Error('Model "' + modelName + '" not found.').message);
          console.warn('Create a file named "/' + modelFileName + '.js" in your app.');
        });
      }





      return controller;
    };

  });