define(function(require){
	var app 						= require('app');
		PageView 					= require('views/pageview'),
		app.page.thank_you_fail 	= {};
	
	return view = app.page.thank_you_fail.view = PageView.extend({
		template: _.template(require('text!templates/thank_you_fail.html'))
	});
});