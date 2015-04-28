requirejs.config({
  'paths': {
    'text': '/framework/vendor/requirejs/require-text',
    'jquery': '/framework/vendor/jquery/dist/jquery'
  }
});

define(['Cake/app/app', 'Cake/core/core', 'Cake/util/util'], function (App, Core, Util) {

  function Cake() {
  }

  var app = new App(),
      core = new Core(),
      util = new Util();

  //Verbose Inclusion
  Cake.prototype.app = app;
  Cake.prototype.core = core;
  Cake.prototype.util = util;

  //Focused API
  Cake.prototype.route = app.router;
  Cake.prototype.debugger = util.debugger;

  //Instantiate framework
  var cakeInstance = new Cake();

//	cakeInstance.app.router( cakeInstance );

  return cakeInstance;

});