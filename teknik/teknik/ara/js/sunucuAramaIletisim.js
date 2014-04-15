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
			this.veriAl = function()
			{
				var kilit = erteleme.defer();
				this.http.post("http://localhost:54609/raporAl.ada", kilit).success(function (data) { kilit.resolve(data); });
				return kilit.promise;
				//return "sunucudan dönen bilgi";
			}

			//this.manuel = function()
			//{
			//	var retVal = '{}';

			//	return JSON.parse(retVal);
			//}

			//this.manuel2 = function()
			//{
			//	var kilit = erteleme.defer();
			//	//this.http.get('/teknik/ara/json/policeAramaSonuc.json')
			//	//	.success(function(data)
			//	//	{
			//	//		//console.log("ok");
			//	//		//angular.extend(_this, data);
			//	//		kilit.resolve();
			//	//	})
			//	//	.error(function(errorData)
			//	//	{
			//	//		console.log("hata : " + errorData);
			//	//		kilit.reject('could not find /teknik/ara/js/policeAramaSonuc.json');
			//	//	});


			//	this.http.post('/teknik/ara/json/policeAramaSonuc.json', {}).then(function(gelen)
			//	{
			//		kilit.resolve(JSON.parse(gelen));
			//	});

			//	return kilit.promise;
			//}
		}
	]);
});

