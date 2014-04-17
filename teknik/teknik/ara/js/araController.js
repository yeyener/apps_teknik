define(['app', '../js/sunucuAramaIletisim', '../js/filtreController'], function(app)
{
//var AramaFiltreController = function ($scope, $modalInstance, items) {
	//app.controller('AramaFiltreController', function($scope, $modalInstance, items)
	//{
	//	$scope.items = items;
	//	$scope.selected = {
	//		item: $scope.items[0]
	//	};

	//	$scope.ok = function()
	//	{
	//		$modalInstance.close($scope.selected.item);
	//	};

	//	$scope.cancel = function()
	//	{
	//		$modalInstance.dismiss('cancel');
	//	};
	//});

	app.controller('araController',
    [
		'$scope', '$modal', 'sunucuAramaIletisim', 'filtreController',
        function ($scope, $modal, sunucuAramaIletisim, filtreController) {
        	$scope.items = ['item1', 'item2', 'item3'];
        	$scope.Arama = new Arama($scope);

        	$scope.aramaYap = function () {
        		sunucuAramaIletisim.veriAl(this).then(function (sonuc) {
        			var sonuc1 = sonuc;
        			$scope.Arama.ayarla(sonuc1[0]);
        		});
        	}

        	$scope.kriterAl = function()
	        {
        		var modalInstance = $modal.open({
        			templateUrl: '/teknik/ara/views/filtre.html',
        			controller: filtreController,
        			resolve: {
        				items: function () {
        					return $scope.items;
        				}
        			}
        		});

        		modalInstance.result.then(function (selectedItem) {
        			//$scope.selected = selectedItem;
			        alert(selectedItem);
		        }, function () {
        			//$log.info('Modal dismissed at: ' + new Date());
			        alert("dismissed");
		        });
	        }
        }
    ]);
});

function Arama(scope)
{
	this.scope = scope;
	this.Baslik = "Poliçe Ara";
	this.AramaKriterleri = new AramaKriterleri();
	this.AramaSonuc = new AramaSonuc();
	this.ayarla = function (sonuc)
	{
		this.AramaSonuc = sonuc;
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
