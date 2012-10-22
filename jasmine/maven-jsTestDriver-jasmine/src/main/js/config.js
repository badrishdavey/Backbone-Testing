/*global define:false, console:false, Backbone:false, _:false, $:false, Handlebars:false, DEVMODE:false*/
// Configuration for `require.js`.
require.config({
	baseUrl: 'js',
	deps: ['main'],

	// These are simply aliases for the given paths. Now in our app we can use
	// the aliases instead of typing the whole path.
	paths: {

		// libs
		'underscore': '../assets/js/libs/underscore',
		'jquery': '../assets/js/libs/jquery',
		'backbone': '../assets/js/libs/backbone',
		'handlebars': '../assets/js/libs/handlebars',

		// plugins
		'text': '../assets/js/plugins/text'
	},

	// The shim wraps non-AMD (Asynchronous Model Definition : dependencies for a file) javascript files in the AMD boilerplate code,
	// loads the dependencies of these javascript files, and then exposes
	// some of them on the global namespace.
	shim: {
		underscore: {
			exports: '_'
		},
		jquery: {
			exports: '$'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		handlebars: {
			exports: 'Handlebars'
		}
	}
});