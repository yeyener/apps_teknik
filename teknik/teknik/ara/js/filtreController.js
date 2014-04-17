define(['app'], function (app) {
	app.service('filtreController',
    [
		//'$scope', 
		'$modalInstance',
        function ($modalInstance) {
        	//$scope.ok = function () {
        	//	$modalInstance.close("close");
        	//};

        	//$scope.cancel = function () {
        	//	$modalInstance.dismiss('cancel');
        	//};
        }
    ]);
});



//var AramaFiltreController = function ($scope, $modalInstance, items) {

//	$scope.items = items;
//	$scope.selected = {
//		item: $scope.items[0]
//	};

//	$scope.ok = function () {
//		$modalInstance.close($scope.selected.item);
//	};

//	$scope.cancel = function () {
//		$modalInstance.dismiss('cancel');
//	};
//};
//alert("asdfasdf: " + AramaFiltreController);

//var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

//	$scope.items = items;
//	$scope.selected = {
//		item: $scope.items[0]
//	};

//	$scope.ok = function () {
//		$modalInstance.close($scope.selected.item);
//	};

//	$scope.cancel = function () {
//		$modalInstance.dismiss('cancel');
//	};
//};