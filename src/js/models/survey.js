define(function(require){
	var Backbone = require('backbone');

	var Survey = Backbone.Model.extend({
		defaults: {
			name: 'Demo Name',
			title: 'Demo Title',
			id: null,
			categories: null
		}
	});

	return Survey;
});