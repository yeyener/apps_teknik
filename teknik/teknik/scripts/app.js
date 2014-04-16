define(['routes', 'services/dependencyResolverFor'], function (config, dependencyResolverFor)
{
	var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap']);

    app.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
		'$resourceProvider',
		//'$',

        function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $resourceProvider)
        {
	        app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        app.factory    = $provide.factory;
	        app.service    = $provide.service;

            $locationProvider.html5Mode(true);
            if(config.routes !== undefined)
            {
                angular.forEach(config.routes, function(route, path)
                {
                    $routeProvider.when(path, {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
                });
            }

            if(config.defaultRoutePaths !== undefined)
            {
	            
                $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
            }
        }
    ]);

   return app;
});