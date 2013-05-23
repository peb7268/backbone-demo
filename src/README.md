#ICE Application Structure 
v. 0.3  

The app is composed using backbone, requirejs, the require text plugin, and laravel to serve the dynamic data.
Currently to make new pages you just have to: 

1. create a new template 
2. create a new view: make sure you set the app.page property to the name of the file you're making, also set the return view property.  
  

**Example:** Making the *initial_concept.js* view.

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
The corresponding html template in *templates/initial_concept.html* looks like this:  

*initial_concept.html*

````markdown 
<h1>Initial Concept</h1>
<p>[img_here]</p>
<h4>Concept Name</h4>
<p>This is the initial concept Text</p>

<a href="#categories">Back</a>
<a href="#next_concept" class="next agree">Next</a>
````  
The last thing you have to do to get this working is add the view to the *main.js* file.  
````markdown 
......  
define(function(require) {
    var Pages       = require('collections/pages');

    require('views/intro');
    require('views/thank_you_fail');
    require('views/categories');
    require('views/background');
    require('views/initial_concept');
    
    require('router');

    var PagesCollection = new Pages({}),

    router = new Router();
    Backbone.history.start();
});
````  


##Caveats  
