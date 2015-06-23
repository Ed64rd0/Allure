var supplierCtrl = angular.module('supplierCtrl', []);

supplierCtrl.controller('SupplierCtrl', ['$scope', 'Suppliers', '$location',
    function($scope, Suppliers, $location){

        $scope.listofSuppliers = [];

        if ($location.$$url === '/contactos') {
            $scope.suppliers = Suppliers.get.get();
        }

        $scope.saveSupplier = function() {
            Suppliers.saveSupplier.save($scope.app.supplier, function(app) {
                $scope.app.supplier = new Object();
                $location.path('/contactos');
            });
        };

        $scope.deleteSupplier = function(supplierId) {
            Suppliers.deleteSupplier.delete({supplierId: supplierId}, function(app) {
                $location.path('/contactos');
            });
        };

        $scope.deleteSuppliers = function() {
            Suppliers.deleteSupplier.delete($scope.listofSuppliers, function(app) {
                $location.path('/contactos');
            });
        };

        $scope.addToList = function(supplierId) {
            if ( $scope.listofSuppliers.indexOf(supplierId) >= 0 ) {
                var index = $scope.listofSuppliers.indexOf(supplierId);
                $scope.listofSuppliers.splice(index, 1);
            } else {
                $scope.listofSuppliers.push(supplierId);
            }
        };
}]);
