define(function(require){

	var app = require('app'),
		PageView = require('views/pageview');


	app.page.intro = {};

	var view = app.page.intro.view = PageView.extend({
		template: _.template($('#intro').html())
	});

	return view;
});
