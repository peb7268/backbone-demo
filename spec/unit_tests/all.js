define(function(require){
	var Backbone = require('backbone');

	describe("The tests are working", function(){
		it('expect it to have Backbone and jQuery', function(){
			expect(Backbone).toBeDefined();
			expect($).toBeDefined();
		});
	});

})