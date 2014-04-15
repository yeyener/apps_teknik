define(['app', '../js/sunucuAramaIletisim'], function (app, sunucuAramaIletisim) {
	app.controller('araController',
    [
		'$scope', 'sunucuAramaIletisim',
        function ($scope, sai) {
        	$scope.Arama = new Arama(sai);
	        
        }
    ]);
});


//var AramaTipi = Object.freeze({PoliceArama: 0, TahsilatArama: 1, HasarArama: 2});
function Arama(sunucuAramaIletisim)
{
	this.sunucuAramaIletisim = sunucuAramaIletisim;
	this.Baslik = "Poliçe Ara";
	this.AramaKriterleri = new AramaKriterleri();
	this.AramaSonuc = new AramaSonuc();
	this.aramaYap = function ()
	{
		//var gelen = sunucuAramaIletisim.manuel2();
		//this.AramaSonuc = gelen;

		sunucuAramaIletisim.veriAl().then(function(sonuc)
		{
			alert(sonuc);
		});
	};

	
}

function AramaSonuc()
{
	this.hits = new Object();
	this.hits.total = 0;
	this.hits.hits = [];
}

function AramaKriterleri() {
	this.Guvenlik = new Guvenlik();
	this.Tipi = "PoliceArama";
	this.Sorgu = "";
}

function Guvenlik() {
	this.TarihSaat = "";
	this.KullaniciAdi = "";
	this.Parola = "";
}
