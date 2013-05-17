define(function(){
	var app = {};
	//Page Models
	var currentPage;
	app.setCurrentPage = function(pageView){
		if(currentPage) currentPage.destroy();
		currentPage = pageView;
	};
	app.page = {};

	return app;
});
