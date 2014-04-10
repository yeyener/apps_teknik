require.config({
    baseUrl: 'scripts',
    paths: {
    	'angular': '../../lib/angular/angular',
    	'angular-route': '../../lib/angular/angular-route/angular-route',
    	'bootstrap': '../../bootstrap/js/bootstrap.min',
    	'jquery': '../../lib/jquery/jquery-2.1.0.min'
    },
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrap']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);