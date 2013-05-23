#ICE Application Structure 
v. 0.3  

The app is composed using backbone, requirejs, the require text plugin, and laravel to serve the dynamic data.
Currently to make new pages you just have to: 

1. create a new template 
2. create a new view: make sure you set the app.page property to the name of the file you're making, also set the return view property. See below for an example:  

````markdown 
define(function(require){
	var app 		= require('app');
		PageView 	= require('views/pageview'),
		app.page.initial_concept = {};
	
	return view = app.page.initial_concept.view = PageView.extend({
		template: _.template(require('text!templates/initial_concept.html'))
	});
});
````  
This makes the initial concept page that is being setup to work with the ```` #intial_concept ```` route.


##Caveats  
