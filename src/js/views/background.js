define(function(require){
	var app 		= require('app');
		PageView 	= require('views/pageview'),
		app.page.background = {};
	
	return view = app.page.background.view = PageView.extend({
		template: _.template(require('text!templates/background.html'))
	});
});