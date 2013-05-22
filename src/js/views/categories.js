define(function(require){	
	var Survey 		= require('models/survey'), 
		app 		= require('app'),
		PageView 	= require('views/pageview'), 
		markdown 	= require('text!templates/categories.html'),
		selected,
		nextPage;
		app.page.categories = {};

	var	view = app.page.categories.view = PageView.extend({
		model: new Survey({categories: [ 'Current Events', 'Food &amp; Drinking', 'Sports Technology', 'Leisure &amp; Entertainment', 'U.S. Politics', 'Foreign Affairs', 'Business &amp; Economics']}),
		template: _.template(require('text!templates/categories.html')),

		events: {
			'click input[type="checkbox"]' : 'captureCategories',
			'click .next': 'advanceOrBoot'
		},

		captureCategories: function(e){
			selected = [];
			selected.push(this.$el.find('ul li input:checked').val());
		},
		advanceOrBoot: function(e){	
			nextPage = $(e.target).attr('href');
			e.preventDefault();
			console.log(selected);
			if(selected[0] === 'U.S. Politics') {
				window.location = nextPage;
			} else {
				console.log('Thank you for wanting to take this survey. You arent good enough though.')
			}
		}
	});

	return view;
});