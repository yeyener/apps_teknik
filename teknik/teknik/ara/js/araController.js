define(['app'], function (app) {
	app.service('sunucuAramaIletisim',
	[
		'$scope',
		function ($scope) {
			this.aramaYap = function () {
				alert("servis");
				return "aa";
			};
		}

	]).controller('araController',
    [
        '$scope', 'sunucuAramaIletisim',
        function ($scope, sunucuAramaIletisim) {
        	$scope.Arama = new Arama();
        }
    ]);
});

//var AramaTipi = Object.freeze({PoliceArama: 0, TahsilatArama: 1, HasarArama: 2});
function Arama() {
	//this.araServisi = araService;
	this.Baslik = "Poliçe Ara";
	this.AramaKriterleri = new AramaKriterleri();

	this.aramaYap = function() {
		//this.araServisi.aramaYap();
		//alert("aramaYap()  " + this.AramaKriterleri.Sorgu);
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