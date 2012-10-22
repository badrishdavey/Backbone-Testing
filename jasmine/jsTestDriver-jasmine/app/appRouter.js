/*global define:false, console:false, Backbone:false, _:false, $:false*/
define([
  'backbone',
  'views/thingListView'
], function (Backbone, ThingListView) {

  // Defining the application router, you can attach sub routers here.
  return Backbone.Router.extend({

    routes: {
      '': 'index',
      '/': 'index'
    },

    initialize: function (app) {

      _.bindAll(this, 'index');

      // Namespaced under app
      this.app = app;
      
      this.$main = $('#main-content');
      
      this.thingListView = new ThingListView({
        collection: this.app.collections.things
      });
    },

    index: function () {
      if (this.currentView) {
        this.currentView.close();
      }
      this.$main.html(this.thingListView.render().el);
      this.currentView = this.thingListView;
    }
  });
});
