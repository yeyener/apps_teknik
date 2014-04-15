define([], function ()
{
	//alert("routes");
	return {
		defaultRoutePaths: '/teknik/',
		routes: {
			'/teknik': {
				templateUrl: '/teknik/ara/views/ara.html',
				dependencies: [
                    '../teknik/ara/js/araController',
					'../teknik/scripts/directives/app-color'
				]
			},
			'/home': {
				templateUrl: '/teknik/views/home.html',
				dependencies: [
                    'controllers/HomeViewController'
				]
			},
			'/about/:person': {
				templateUrl: '/teknik/views/about.html',
				dependencies: [
                    'controllers/AboutViewController',
                    'directives/app-color'
				]
			},
			'/contact': {
				templateUrl: '/teknik/views/contact.html',
				dependencies: [
                    'controllers/ContactViewController'
				]
			}
		}
	};
});