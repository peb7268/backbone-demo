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
var Page = Backbone.Model.extend({
	defaults: {
		name: '',
		title: '',
		content: ''
	}
});

var PageView = Backbone.View.extend({
	el: 'body',
	tagName: 'div',

	initialize: function(){
		this.render();
	},
	render: function(){
		console.log(this.model.toJSON());
		this.$el.append(this.model.get('title'));
		this.$el.append(this.model.get('content'));
		return this;
	}
});

//Model Instances
//Survey
var survey = new Survey({
	name: 'Ice Demo Survey',
	title: '2012 presidential Caucus',
	id: 10020349,
	topic: {
		categories: [ 'Current Events', 'Food &amp; Drinking', 'Sports Technology', 'Leisure &amp; Entertainment', 'U.S. Politics', 'Foreign Affairs', 'Business &amp; Economics'],
	}
});

//Pages
var intro = new Page({
	name: 'Intro',
	title: 'Get Paid for Having FUN!!<br><br>',
	content: 'We\'d like your help today by participating in a stock investing game. In this game we\'ll present you with a group of possible outcomes, complete with images and descriptions. Once you\'ve reviewed each potential outcome, you\'ll be given the opportunity to buy \" virtual stock shares \" in them using a stock trading tool.</p><p>In addition to the reward you\'ll be receiving for participating, by investing in the potential outcome that actually occurs, you\'ll be able to win up to an additional $10!'
});

var background = new Page({
	name: 'Background',
	title: 'Background',
	content: 'We would like your feedback! Your goal is to predict which Republican Candidate will win the Iowa Caucus on January 3, 2012. If you predict the winning candidate, you can earn up to an additional $10! For this scenario you will be reviewing the seven (7) current candidates for the Republican Presidential nomination. In order to proceed, you must agree to the terms of our NDA (non-disclosure agreement) which specifies how you must treat this confidential information.'
});

//Views
var pageView = new PageView({
	model: intro
});