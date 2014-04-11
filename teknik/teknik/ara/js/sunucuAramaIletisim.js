define(['app'], function(app)
{
	app.service('sunucuAramaIletisim',
	[
		'$http', '$resource',
		function ($http, res)
		{
			this.veriAl = function()
			{
				return "sunucudan döneen bilgi";
			}

			this.manuel = function()
			{
				return $resource('phones/:phoneId.json', {}, {
					query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
				});
			}
		}
	]);

});

