require.config({
    paths: {
    	jquery: '../src/js/lib/jquery',
    	underscore: '../src/js/lib/underscore',
        backbone: '../src/js/lib/backbone',
        templates: '../templates',
        jasmine: '../../spec/lib/jasmine.js',
        spec:    '../../spec/'
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
    	},
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html':{
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});

define(function(require) {
    require('../../spec/unit_tests/all');

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
    };

    jasmineEnv.execute();
    
});
