var supplierCtrl = angular.module('supplierCtrl', []);

supplierCtrl.controller('SupplierCtrl', ['$scope', 'Suppliers', function($scope, Suppliers){

    $scope.init = function() {
        $scope.suppliers = Suppliers.get();
    };

    $scope.init();
}]);
