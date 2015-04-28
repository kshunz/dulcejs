requirejs.config({
  'paths': {
    'App': './',
    'Cake': '../framework'
  }
});

require(['Cake/cake', './config/routes'], function ($cake, routeControllerMappings) {

//	$cake.debugger.warn('app/app:', 'Starting the application...');

  //Mappings are only needed if you veer from controller names or DAVIE default action  mappings
  $cake.route(routeControllerMappings);

  //Anchor the app on the page
  var body = document.getElementsByTagName('body')[0];

  body.innerHTML = '<style>body {background: gray; color: white; padding: 5px 15px;}</style><h2>Hi</h2>';

});