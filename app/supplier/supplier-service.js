var supplierService = angular.module('supplier-service', ['ngResource']);

supplierService.factory('Suppliers', ['$resource', function($resource) {
    return {
        get : $resource('http://localhost:8080/allureWeb/allure/suppliers', {}, {
            get: {method: 'GET', params: {}, isArray: true}
        }),
        saveSupplier : $resource('http://localhost:8080/allureWeb/allure/suppliers', {}, {
            save: { method: 'POST', params: {}, isArray: false }
        })
    }
}]);