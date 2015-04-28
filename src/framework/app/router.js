define(['Cake/app/router/load_controller'], function (loadCtrl) {

  var defaultRoute = '#/';

  var $window = window,
      currentRoute;

  function changeRoute(route) {
    $window.location.hash = route || $window.location.hash;

  }

  function getRoute() {
    var currHash = $window.location.hash,
        currRoute = currHash.split('#').join('');

    return currRoute;
  }

  function routeMatches(route) {
    return route && getRoute() === route;
  }

  function resolveConfig() {

    var currentRoute = getRoute();

    currentRoute = currentRoute.charAt(0) === '/' ? currentRoute.replace('/', '') : currentRoute;
    currentRoute = currentRoute.split('/');

    var ctrl = currentRoute.shift(),
        action = currentRoute.shift() || 'index';

    var dynamicConfig = Object.create(null);
    dynamicConfig.controller = [ctrl, 'Controller'].join('');
    dynamicConfig.action = action;

    return dynamicConfig;
  }

  function whenRouteIs(route, config) {

    var ctrl = config.controller || undefined,
        action = config.action || 'index';

    if (ctrl && routeMatches(route)) {
      this.routeMatched = true;

      loadCtrl(ctrl, action);
    }

    return this;
  }

  function defaultTemplate(route) {
    currentRoute = route || defaultRoute;

    if (!this.routeMatched) {
      changeRoute(currentRoute);
    }
  }

  //ROUTER
  function Router(parentCakeInstance) {

    this.routeMatched = false;

    var cfg,
        davieConvention = {
          'delete': true,
          'add': true,
          'view': true,
          'index': true,
          'edit': true
        };

    if (!this.routeMatched) {
      cfg = resolveConfig();
      cfg.action = cfg.action;

      if (cfg.controller !== 'Controller' && davieConvention[cfg.action]) {
        this.routeMatched = true;
        console.warn('cfg', cfg);

        whenRouteIs(getRoute(), cfg);
      }

    }

    this.default = defaultTemplate;
    this.when = whenRouteIs;

    if (parentCakeInstance) {
      parentCakeInstance.router = this;
    }

    /*Support UIs that do not support onhashchange event*/
    var initLaunch = setInterval(function () {
      if (!$window.location.hash) {
        $window.location.hash = defaultRoute;
      }

    }, 500);

    /*Timeout added to clear the interval on page refresh*/
    setTimeout(function () {
      clearInterval(initLaunch);
    }, 5500);

    var $routerInstance = this;

    $window.onhashchange = function (newUrl, oldUrl) {

      clearInterval(initLaunch);

      if (newUrl !== oldUrl) {
        var cfg = resolveConfig();

        loadCtrl(cfg.controller, cfg.action);
      }

    };

    return this;
  }

  return Router;

});