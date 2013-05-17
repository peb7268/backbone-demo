define(function(require){
	var app 		= require('app'),
		PageView 	= require('views/pageview'),
		survey 		= require('models/survey');

	app.page.categories = {};
	var view = app.page.categories.view = PageView.extend({
		model: survey,
		template: _.template(require('text!templates/categories.html'))
	});

	return view;
});