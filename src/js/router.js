define(function(require){
	var Backbone 	= require('backbone'),
		app 		= require('app');
		require('views/intro');
		require('views/categories');
		require('views/background');		   
					   
	var Router = Backbone.Router.extend({
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

	var router = new Router();
	Backbone.history.start();
});