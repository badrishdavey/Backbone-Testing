/*global require:false*/
// Configuration for `require.js`.
require.config({

	baseUrl: '/test/app/',

	// These are simply aliases for the given paths. Now in our app we can use
	// the aliases instead of typing the whole path.
	paths: {

		// libs
		'jquery': '../assets/js/libs/jquery',
		'underscore': '../assets/js/libs/underscore',
		'backbone': '../assets/js/libs/backbone',
		'handlebars': '../assets/js/libs/handlebars',

		// plugins
		'text': '../assets/js/plugins/text',
	},

	// The shim wraps non-AMD (Asynchronous Model Definition : dependencies for a file) javascript files in the AMD boilerplate code,
	// loads the dependencies of these javascript files, and then exposes
	// some of them on the global namespace.
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'handlebars': {
			exports: 'Handlebars'
		}
	}
});