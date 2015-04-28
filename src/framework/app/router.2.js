define([
    './config/global',
    'Cake/util/inflector',
    './router/get_route',
    './router/load_controller',
    './router/load_view',
    './router/resolve_config'],
  function ($window, inflector, getRoute, loadController, loadView, resolveConfig) {

    return function (userProvidedMappings) {
      var routeHasBeenUpdated = false,
          cfgFromMappings,
          dynamicConfig,
          mappings = userProvidedMappings || {},
          actionList = mappings[getRoute()] || [],
          actionListType = actionList ? actionList.constructor : undefined,
          newActionList = [],
          onlyOneAction = actionListType && actionListType !== Array,
          listOfActions = actionListType === Array && actionList.length > 0,
          intuitiveAction = !onlyOneAction && !listOfActions;

      if (onlyOneAction) {
        newActionList.push(actionList);
        actionList = newActionList;
        listOfActions = true;
      }

      if (listOfActions) {
        actionList.forEach(function (ctrlAction) {
          loadController(ctrlAction.controller, inflector.camelize(ctrlAction.action));
          loadView(ctrlAction.action);

//          console.log('list of action:', ctrlAction.action);
        });

        routeHasBeenUpdated = true;
      }

      if (intuitiveAction) {
        dynamicConfig = resolveConfig(getRoute());

        loadController(dynamicConfig.controller, inflector.camelize(dynamicConfig.action));
        loadView(dynamicConfig.action);

        routeHasBeenUpdated = true;
//        console.log('intuitive action:', dynamicConfig.action);
      }

      /*Hash Listening*/
      /*Support UIs that do not support onhashchange event*/
      var cfg,
          defaultRoute = '#/',
          initLaunch = setInterval(function () {
            if (!$window.location.hash) {
              $window.location.hash = defaultRoute;
            }
          }, 500);

      /*Timeout added to clear the interval on page refresh*/
      setTimeout(function () {
        clearInterval(initLaunch);

        if (routeHasBeenUpdated === false) {
          cfgFromMappings = mappings[getRoute()] || {};

          var action = inflector.camelize(cfgFromMappings.action);

          loadController(cfgFromMappings.controller, action);
          loadView(action);
        }
      }, 500);

      $window.onhashchange = function (newUrl, oldUrl) {

        clearInterval(initLaunch);

        if (newUrl !== oldUrl) {
          cfg = resolveConfig(getRoute());

          var action = inflector.camelize(cfg.action);

          loadController(cfg.controller, action);
          loadView(action);
        }
      };

    };
  });