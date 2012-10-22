/*global define:false, console:false, Backbone:false, _:false, $:false, Handlebars:false*/
define([
  'backbone',
  'views/thingListItemView'
], function (Backbone, ThingListItemView) {
  'use strict';
  
  return Backbone.View.extend({

    tagName: 'ul',

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {

      var that = this;

      this.collection.each(function (item) {
        that.$el.append(new ThingListItemView({model: item}).render().el);
      });

      return this;
    },

    close: function () {
      this.unbind();
      this.remove();
    }
  });
});
