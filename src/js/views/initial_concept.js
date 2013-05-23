define(function(require){
	var app 		= require('app');
		PageView 	= require('views/pageview'),
		app.page.initial_concept = {};
	
	return view = app.page.initial_concept.view = PageView.extend({
		template: _.template(require('text!templates/initial_concept.html'))
	});
});