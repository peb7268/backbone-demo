define(function(require){
	var Backbone = require('backbone');

	var PageView = Backbone.View.extend({
		initialize: function(){
			this.render();
		},
		render: function(){
			var values = this.model ? this.model.attributes : {};
			this.$el.html(this.template(values)).appendTo(document.body);
			return this;
		},
		destroy: function(){
			this.$el.remove();
		}
	});

	return PageView;
});