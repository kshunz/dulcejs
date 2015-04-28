define([
    'Cake/vendor/handlebars/handlebars',
    'jquery'
  ],
  function (handlebars, $) {

    return {
      render: function (html, data) {

        var template = handlebars.compile(html),
            compiledData = template(data);

        return compiledData;
      },

      loadContent: function loadViewContent(ctrlName, actionName) {
        return new Promise(function (Resolve, Reject) {
          var contentPage = 'text!view/' + ctrlName + '/' + actionName + '.cakv';

          require([contentPage], function (contentHtml) {
            Resolve(contentHtml);
          }, function (err) {
            Reject(err);
          });
        });
      },

      loadTemplate: function loadViewTemplate(ctrlInstance) {
        return new Promise(function (Resolve, Reject) {
          var layout = ctrlInstance.layout || 'default',
              layoutPage = 'text!layout/' + layout + '.cakl';

          require([layoutPage], function (layoutHtml) {
            Resolve(layoutHtml);
          }, function (err) {
            Reject(err);
          });

        });
      }
    };

  });