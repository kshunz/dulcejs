define(['Cake/app/config/global'], function ($window) {

  return function () {
    var currHash = $window.location.hash,
        currRoute = currHash.split('#').join(''),
        cleanRoute;

    currRoute = currRoute.split('/');

    if (currRoute[currRoute.length - 1] === '') {
      currRoute.pop();
    }

    cleanRoute = currRoute.join('/');

    return cleanRoute || '/';
  };
});