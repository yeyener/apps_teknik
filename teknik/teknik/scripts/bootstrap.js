require.config({
	baseUrl: 'scripts',
	paths: {
		'angular': '/lib/angular/angular',
		'angular-route': '/lib/angular/angular-route/angular-route',
		'angular-resource': '/lib/angular/angular-resource/angular-resource'
	},
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'angular-resource']
		},
		'angular-route': {
			deps: ['angular']
		},
		'angular-resource': {
			deps: ['angular']
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