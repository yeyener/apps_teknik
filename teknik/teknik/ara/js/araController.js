define(['app'], function (app) {
	app.controller('araController',
    [
        '$scope',
        function ($scope) {
        	$scope.Arama = new Arama();
        }
    ]);
});

//var AramaTipi = Object.freeze({PoliceArama: 0, TahsilatArama: 1, HasarArama: 2});
function Arama()
{
	this.Baslik = "Poliçe Ara";
	this.AramaKriterleri = new AramaKriterleri();

	this.aramaYap = function()
	{
		alert("aramaYap()  " + this.AramaKriterleri.Sorgu);
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