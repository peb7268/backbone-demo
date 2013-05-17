var app = {};

//Models
var Survey = Backbone.Model.extend({
	defaults: {
		name: 'Demo Name',
		title: 'Demo Title',
		id: null,
		topic: {
			categories: [],
			min: 2,	
			max: null
		}	
	}
});

var survey = new Survey({
	name: 'Ice Demo Survey',
	title: '2012 presidential Caucus',
	id: 10020349,
	topic: {
		categories: [ 'Current Events', 'Food &amp; Drinking', 'Sports Technology', 'Leisure &amp; Entertainment', 'U.S. Politics', 'Foreign Affairs', 'Business &amp; Economics'],
	}
});

var Page = Backbone.Model.extend({
	defaults: {
		name: '',
		title: '',
		content: ''
	}
});

var PageView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON())).appendTo(document.body);
		return this;
	},
	destroy: function(){
		this.$el.remove();
	}
});


//Page Models
var currentPage;
app.setCurrentPage = function(pageView){
	if(currentPage) currentPage.destroy();
	currentPage = pageView;
};
app.page = {};
app.page.intro = {};
app.page.intro.model = new Page({
	name: 'Intro',
	title: '',
	content: ''
});
app.page.intro.view = PageView.extend({
	template: _.template($('#intro').html())
});

app.page.categories = {};
app.page.categories.model = new Page({
	name: 'Categories',
	title: '',
	content: ''
});
app.page.categories.view = PageView.extend({
	template: _.template($('#categories').html())
});

app.page.background = {};
app.page.background.model = new Page({
	name: 'Background',
	title: '',
	content: ''
});
app.page.background.view = PageView.extend({
	template: _.template($('#background').html())
});

var Router = Backbone.Router.extend({
	routes: {
		'': 'start',
		':page': 'setUpPage'
	},
	start: function(){
		this.setUpPage('intro');
	},
	setUpPage: function(page){
		var pageView = new app.page[page].view({
			model: app.page[page].model
		});
		app.setCurrentPage(pageView);
	}
});

var router = new Router();
Backbone.history.start();