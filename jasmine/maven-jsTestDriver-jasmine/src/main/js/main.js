/*global define:false, console:false, Backbone:false, _:false, $:false, Handlebars:false, DEVMODE:false*/
// Entry point for application.
// ----------------------------
require([
	'jquery',
	'underscore',
	'backbone',
	'app',
	'appRouter'
], function ($, _, Backbone, App, AppRouter) {
	'use strict';

	// Kick-start the application.
	var app = App;
	app.initialize();

	app.appRouter = new AppRouter(app);

	// Enable url history functionality.
	Backbone.history.start();
});