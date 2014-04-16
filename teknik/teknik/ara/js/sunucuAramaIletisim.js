/// <reference path="sunucuAramaIletisim.js" />
define(['app'], function(app)
{
	app.service('sunucuAramaIletisim',
	[
		'$http', '$resource', '$q',
		function($http, res, $q)
		{
			this.http = $http;
			var erteleme = $q;
			this.veriAl = function(obj)
			{
				var kilit = erteleme.defer();
				this.http.post("raporAl.ada", kilit).success(function (data) { kilit.resolve(data); }).error(function(errorData) { alert("Hata Oluştu: " + errorData); });
				return kilit.promise;
			}
		}
	]);
});

