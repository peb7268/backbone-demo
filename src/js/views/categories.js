define(function(require){	
	var Survey 		= require('models/survey'), 
		app 		= require('app'),
		PageView 	= require('views/pageview'), 
		markdown 	= require('text!templates/categories.html'),
		nextPage;
		app.page.categories = {};

	var	view = app.page.categories.view = PageView.extend({
		model: new Survey({ advancementThreshold: 2, categories: [ 'Current Events', 'Food &amp; Drinking', 'Sports Technology', 'Leisure &amp; Entertainment', 'U.S. Politics', 'Foreign Affairs', 'Business &amp; Economics'], allowed: ['U.S. Politics', 'Foreign Affairs'] }),
		template: _.template(require('text!templates/categories.html')),

		events: {
			'click .next': 'advanceOrBoot'
		},

		captureCategories: function(e){
			var selected	= [],
			$boxes = this.$el.find('ul li input[type="checkbox"]:checked');

			_.each($boxes, function(elem, idx, list){
				if($(list[idx]).is(':checked')){
					selected.push($(list[idx]).val());
				}
			});
			return selected;
		},
		getAllowedCategories: function(){
			return this.model.get('allowed');
		},
		getAdvancementThreshold: function(){
			return this.model.get('advancementThreshold');
		},
		meetsCritereaToAdvance: function(selected, allowed, threshold){
			var criteria = [];
			_.each(selected, function(selected_elem, index, list){
				_.each(allowed, function(allowed_elem, index, list){
					if(selected_elem === allowed_elem){
						criteria.push(allowed_elem);
					}
				});
			});
			var matchesFound = (criteria.length >= threshold) ? true : false;
			return matchesFound;
		},
		advanceOrBoot: function(e){	
			e.preventDefault();

			//refactor and pass these members in 
			var selected 		= this.captureCategories(),
				allowed  		= this.getAllowedCategories(), 
				threshold 		= this.getAdvancementThreshold(),
				readyToAdvance 	= this.meetsCritereaToAdvance(selected, allowed, threshold),
				nextPage 		= $(e.target).attr('href');
		
				if(readyToAdvance) {
					window.location = nextPage;
				} else {
					//console.log('Thank you for wanting to take this survey. You arent good enough though.')
				}
		}
	});

	return view;
});