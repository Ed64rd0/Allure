var stockCtrl = angular.module('stockCtrl', []);

stockCtrl.controller('StockCtrl', ['$scope', 'Stocks', '$location',
    function($scope, Stocks, $location) {

        $scope.stocks;
        $scope.item;
        $scope.listOfStock = [];
        $scope.message;
        $scope.agregarTienda = false;

        if ($location.$$url === '/inventario') {
            Stocks.getStocks.get( function(app) {
                $scope.stocks = app;
            });
        } else {
            Stocks.getStock.get( function(app) {
                $scope.item = app;
            });
        }

        $scope.saveItem = function() {
            if ( $scope.validatePrices() ) {
                    $scope.message = null;
                    $scope.executeSave();
            } else {
                $scope.message = "El formato del precio de tienda o renta del articulo es incorrecto";

            }
        };

        $scope.validatePrices = function () {
            var priceRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
            if ($scope.item.itemPrice != undefined ) {
                return priceRegex.test($scope.item.itemPrice) && priceRegex.test($scope.item.itemRent);
            } else {
                return priceRegex.test($scope.item.itemRent);
            }
        };

        $scope.executeSave = function() {
            if ($scope.validStore()) {
                Stocks.saveItem.save($scope.item, function (app) {
                    $scope.item = new Object();
                    $location.path('/inventario');
                });
            } else {
                $scope.message = "El nombre de la tienda no puede estar vacio si esta proporcionando datos de la tienda.";
            }
        };

        $scope.deleteItem = function(itemId) {
            Stocks.deleteItem.delete({itemId: itemId}, function(app) {
                $location.path('/inventario');
            });
        };

        $scope.addToList = function(itemId) {
            if ( $scope.listOfStock.indexOf(itemId) >= 0 ) {
                var index = $scope.listOfStock.indexOf(itemId);
                $scope.listOfStock.splice(index, 1);
            } else {
                $scope.listOfStock.push(itemId);
            }
        };

        $scope.validStore = function() {
            if ($scope.item.store.storeAdd == null && $scope.item.store.storeCol == null &&
                $scope.item.store.storeCity == null && $scope.item.store.storeState == null &&
                $scope.item.store.storePhone == null && $scope.item.store.storeCel == null &&
                $scope.item.store.storeEmail == null) {
                return ($scope.item.store.storeName == null) ||
                    $scope.item.store.storeName != null && $scope.item.store.storeName.trim() != '';
            }
            if (
                ($scope.item.store.storeAdd != null || $scope.item.store.storeCol != null ||
                $scope.item.store.storeCity != null || $scope.item.store.storeState != null ||
                $scope.item.store.storePhone != null || $scope.item.store.storeCel != null  ||
                $scope.item.store.storeEmail != null)) {
                    return $scope.item.store.storeName != null && $scope.item.store.storeName.trim() != '';
            }
        }

}]);