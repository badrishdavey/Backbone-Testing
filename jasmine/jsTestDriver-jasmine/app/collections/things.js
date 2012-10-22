/*global define:false, console:false, Backbone:false, _:false, $:false, Handlebars:false*/
define([
  'models/thing'
], function (Thing) {
  'use strict';
  
  return Backbone.Collection.extend({
    
    model: Thing,
    url: 'app/data/things.json'
  });
});
