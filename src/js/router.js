define(function(require){
	var Backbone 	= require('backbone'),
		app 		= require('app');
					   
	return Router = Backbone.Router.extend({
		routes: {
			'': 'start',
			':page': 'setUpPage'
		},
		start: function(){
			this.setUpPage('intro');
		},
		setUpPage: function(page){
			var pageView = new app.page[page].view();
			app.setCurrentPage(pageView);
		}
	});
});