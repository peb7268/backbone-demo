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

	var survey = new Survey({
		name: 'Ice Demo Survey',
		title: '2012 presidential Caucus',
		id: 10020349,
		categories: [ 'Current Events', 'Food &amp; Drinking', 'Sports Technology', 'Leisure &amp; Entertainment', 'U.S. Politics', 'Foreign Affairs', 'Business &amp; Economics']
	});

	return survey;
});