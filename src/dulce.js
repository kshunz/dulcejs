var App = require('./app/app');
var Core = require('./core/core');
var Util = require('./util/util');

function Dulce() {}

var app = new App(),
    core = new Core(),
    util = new Util();

//Verbose Inclusion
Dulce.prototype.app = app;
Dulce.prototype.core = core;
Dulce.prototype.util = util;

//Focused API
Dulce.prototype.route = app.router;
Dulce.prototype.debug = util.debug;

module.exports = new Dulce();
