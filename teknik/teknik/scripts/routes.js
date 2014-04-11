define([], function ()
{
	//alert("routes");
	return {
		defaultRoutePath: '/',
		routes: {
			'/home': {
				templateUrl: '/teknik/views/home.html',
				dependencies: [
                    'controllers/HomeViewController'
				]
			},
			'/arama': {
				templateUrl: '/teknik/ara/views/ara.html',
				dependencies: [
                    '../teknik/ara/js/araController',
					'../teknik/ara/js/classlar',
					'../teknik/scripts/directives/app-color'
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