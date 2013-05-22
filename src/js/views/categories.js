define(function(require){	
	var Survey 		= require('models/survey'), 
		app 		= require('app'),
		PageView 	= require('views/pageview'), 
		markdown 	= require('text!templates/categories.html');
		app.page.categories = {};

	var	view = app.page.categories.view = PageView.extend({
		model: new Survey({categories: [ 'Current Events', 'Food &amp; Drinking', 'Sports Technology', 'Leisure &amp; Entertainment', 'U.S. Politics', 'Foreign Affairs', 'Business &amp; Economics']}),
		template: _.template(require('text!templates/categories.html'))
	});

	return view;
});