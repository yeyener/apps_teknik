define(['app', '../js/sunucuAramaIletisim'], function (app, sunucuAramaIletisim) {
	app.controller('araController',
    [
		'$scope', 'sunucuAramaIletisim',
        function ($scope, as) {
        	$scope.Arama = new Arama();
        	//alert("yy: " + as.veriAl());
        }
    ]);
});


