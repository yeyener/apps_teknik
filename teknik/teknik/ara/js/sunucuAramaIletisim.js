define(['app'], function (app) {
	app.service('sunucuAramaIletisim',
	[
		'$http',
		function ($http)
		{
			this.veriAl = function ()
			{
				return "sunucudan döneen bilgi";
			}
		}
	]);
});