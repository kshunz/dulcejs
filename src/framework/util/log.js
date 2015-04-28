define([], function () {

  return function () {

    var contents = Array.prototype.slice.call(arguments);

    contents.forEach(function (content) {
      //replace with polyfill
      console.log(content);
    });
  };

});