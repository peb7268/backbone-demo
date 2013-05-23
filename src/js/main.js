require.config({
    paths: {
    	jquery: 'lib/jquery',
    	underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        templates: '../templates'
    },
    shim: {
    	'jquery': {
    		exports: 'jQuery'
    	},
    	'underscore': {
    		exports: '_'
    	},
    	'backbone': {
    		deps: ['underscore', 'jquery'],
    		exports: 'Backbone'
    	}
    }
});

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
