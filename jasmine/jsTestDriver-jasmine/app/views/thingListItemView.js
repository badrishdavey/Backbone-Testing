/*global define:false, console:false, Backbone:false, _:false, $:false*/
define([
  'backbone',
  'handlebars',
  'models/thing',
  'text!templates/thingListItem.html'
], function (Backbone, Handlebars, Thing, tmpl) {
  'use strict';
  
   return Backbone.View.extend({

    tagName: 'li',
    
    template: Handlebars.compile(tmpl),

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
});
