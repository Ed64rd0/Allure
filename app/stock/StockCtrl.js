var stockCtrl = angular.module('stockCtrl', []);

stockCtrl.controller('StockCtrl', ['$scope', 'StockService',
    function($scope, StockService){

    $scope.stocks = StockService.getStocks();
}]);
