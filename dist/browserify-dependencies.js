/*global global, require*/
global.jQuery = global.$ = require('jquery');
global._ = require('underscore');
global.Hammer = require('jquery-hammerjs/jquery.hammer-full.js');
require('jquery.hotkeys');
global.MAPJS = global._.extend({}, global.MAPJS, require('mindmup-mapjs-layout'), require('mindmup-mapjs-model'));

