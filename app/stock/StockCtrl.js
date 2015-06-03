var stockCtrl = angular.module('stockCtrl', []);

stockCtrl.controller('StockCtrl', ['$scope', 'Stocks', '$location',
    function($scope, Stocks, $location) {

        $scope.stocks;

        if ($location.$$url === '/inventario') {
            $scope.stocks = Stocks.getStocks.get();
        };

        $scope.saveItem = function() {
            Stocks.saveItem.save($scope.app.item, function(app) {

            });
        };
}]);