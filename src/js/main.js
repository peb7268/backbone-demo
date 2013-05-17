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

define(['router'], function(app) {
	
});
