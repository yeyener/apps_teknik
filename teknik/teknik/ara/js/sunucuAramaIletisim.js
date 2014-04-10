define(['app'], function (app) {
	app.service('sunucuAramaIletisimmmmm',
	[
		'$scope',
		function($scope) {
			this.aramaYap = function() { alert("servis");
				return "aa";
			};
		}
		
    ]);

});
