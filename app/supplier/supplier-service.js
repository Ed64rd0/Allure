var supplierService = angular.module('SupplierService', ['ngResource']);

supplierService.factory('Suppliers', ['$resource', function($resource) {
    return $resource('http://localhost:8080/allureWeb/allure/suppliers', {}, {
        get: {method:'GET', params: {}, isArray:true}
    });
}]);