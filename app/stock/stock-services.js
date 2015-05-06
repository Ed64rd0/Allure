var stockService = angular.module('stock-service', ['ngResource']);

stockService.factory('StockService', ['$resource',
    function($resource) {
        return $resource('http://localhost:8080/allureWeb/allure/stocks', {}, {
            getStocks : {method:'GET', params: {}, isArray:true}
        });
        return $resource('http://localhost:8080/allureWeb/allure/stock', {}, {
            post : {method:'post', params: {}, isArray:false}
        });
    }
]);