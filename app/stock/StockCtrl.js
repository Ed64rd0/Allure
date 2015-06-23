var stockCtrl = angular.module('stockCtrl', []);

stockCtrl.controller('StockCtrl', ['$scope', 'Stocks', '$location',
    function($scope, Stocks, $location) {

        $scope.stocks;
        $scope.listOfStock = [];
        $scope.message;
        $scope.agregarTienda = false;

        if ($location.$$url === '/inventario') {
            Stocks.getStocks.get( function(app) {
                $scope.stocks = app;
            });
        };

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
            if ($scope.app.item.itemPrice != undefined ) {
                return priceRegex.test($scope.app.item.itemPrice) && priceRegex.test($scope.app.item.itemRent);
            } else {
                return priceRegex.test($scope.app.item.itemRent);
            }
        }

        $scope.executeSave = function() {
            Stocks.saveItem.save($scope.app.item, function (app) {
                $scope.app.item = new Object();
                $location.path('/inventario');
            });
        }


        $scope.deleteItem = function(itemId) {
            Stocks.deleteItem.delete(itemId, function(app) {
                $location.$$url == '/inventario';
            });
        }

        $scope.addToList = function(itemId) {
            if ( $scope.listOfStock.indexOf(itemId) >= 0 ) {
                var index = $scope.listOfStock.indexOf(itemId);
                $scope.listOfStock.splice(index, 1);
            } else {
                $scope.listOfStock.push(itemId);
            }
        };

}]);