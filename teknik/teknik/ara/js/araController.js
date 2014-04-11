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
	this.aramaYap = function () {
		alert(sunucuAramaIletisim.veriAl());
	};
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
