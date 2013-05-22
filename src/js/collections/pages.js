define(function(require){
	var Backbone 	= require('backbone'),
		Survey 		= require('models/survey');

	return Backbone.Collection.extend({
		model: Survey,
		url: 'http://api.ice.com/index.php/api/v1/url',
		
		initialize: function(){}
	});
});