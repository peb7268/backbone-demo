#ICE Application Structure 
v. 0.3  

The app is composed using backbone, requirejs, the require text plugin, and laravel to serve the dynamic data.
Currently the workflow to make new pages is: 

1. create a new template: main thing here is setting the href destination hashes to match view names. 
2. create a new view: make sure you set the app.page property to the name of the file you're making, also set the return view property.  
3. require the newly made view in the main.js file.  
  

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
//More code up here ....  

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

The only other thing that is important to talk about is the *router.js* file.  
````markdown  

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

````  
So the initial route called is start which just delegates a call to *setUpPage* and manually passes it the name 
of the page to setup, in this initial case it is ```` intro ````.  
  
 All other calls go to *setUpPage* which just uses the app.page object you populate in each of your views to call the 
 name of the view to instantiate. This is based on your hash in the url, which also happens to be the view file name and template name. Currently this is how we are dynamically creating views.  
 