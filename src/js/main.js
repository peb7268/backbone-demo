require.config({
    paths: {
    	jquery: 'lib/jquery',
    	underscore: 'lib/underscore',
        backbone: 'lib/backbone'
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

define(['views/intro', 'views/categories', 'views/background', 'router'], function(app) {
    
});
