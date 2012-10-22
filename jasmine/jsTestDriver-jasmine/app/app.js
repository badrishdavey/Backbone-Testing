/*global define:false, console:false, Backbone:false, _:false, $:false, Handlebars:false*/
define([
	'collections/things'
], function (Things) {

	return {

		collections: {
			things: new Things()
		},

		initialize: function () {

			this.fetchThings();
		},

		fetchThings: function () {
			this.collections.things.fetch({
				async: false,
				error: function (collection, response) {
					console.error('Error! ', collection, response);
				},
				success: function (collection, response) {
					console.info('Success! Things fetched.', collection, response);
				}
			});
		}
	};
});