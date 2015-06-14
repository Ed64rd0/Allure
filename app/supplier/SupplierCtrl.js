var supplierCtrl = angular.module('supplierCtrl', []);

supplierCtrl.controller('SupplierCtrl', ['$scope', 'Suppliers', '$location',
    function($scope, Suppliers, $location){

        if ($location.$$url === '/contactos') {
            $scope.suppliers = Suppliers.get.get();
        }

        $scope.saveSupplier = function() {
            Suppliers.saveSupplier.save($scope.app.supplier, function(app) {

            });
        };
}]);
