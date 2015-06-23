var stockService = angular.module('stock-service', ['ngResource']);

stockService.factory('Stocks', ['$resource', function($resource) {
        return {
            getStocks : $resource('http://localhost:8080/allureWeb/allure/stocks', {}, {
                    get: { method: 'GET', params: {}, isArray: true }
                }),
            saveItem : $resource('http://localhost:8080/allureWeb/allure/stocks', {}, {
                    save: { method: 'POST', params: {}, isArray: false }
                }),
            deleteItem : $resource('http://localhost:8080/allureWeb/allure/stocks/:itemId', {itemId: '@itemId'}, {
                    delete: { method: 'DELETE', params: {}, isArray: false}
                })
            }
        }
]);