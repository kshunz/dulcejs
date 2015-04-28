define(function () {

  var err = (new Error);
  var caller_line = err.stack.split("\n")[4];
  var index = caller_line.indexOf("at ");
  var clean = caller_line.slice(index + 2, caller_line.length);

  //@TODO: Build awesome debugger but for now just use console
  return console;
});