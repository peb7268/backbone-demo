define(function(require){
	var PageView 	= require('views/pageview'),
		app 		= require('app');

	app.page.background = {};
	var view = app.page.background.view = PageView.extend({
		template: _.template(require('text!templates/background.html'))
	});

	return view;
});