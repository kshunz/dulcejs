define(['Cake/util/contents'], function (utilMethods) {

  utilMethods = utilMethods || {};

  function Util() {
  }

  Object.keys(utilMethods).forEach(function (utilName) {
    Util.prototype[utilName] = utilMethods[utilName];
  });

  return Util;
});