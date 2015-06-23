var supplierService = angular.module('supplier-service', ['ngResource']);

supplierService.factory('Suppliers', ['$resource', function($resource) {
    return {
        get : $resource('http://localhost:8080/allureWeb/allure/suppliers', {}, {
            get: {method: 'GET', params: {}, isArray: true}
        }),
        saveSupplier : $resource('http://localhost:8080/allureWeb/allure/suppliers', {}, {
            save: { method: 'POST', params: {}, isArray: false }
        }),
        deleteSupplier : $resource('http://localhost:8080/allureWeb/allure/suppliers/:supplierId', {supplierId : '@supplierId'}, {
            delete: { method: 'DELETE', params: {}, isArray: false }
        }),
        deleteSuppliers : $resource('http://localhost:8080/allureWeb/allure/suppliers/delete', {}, {
            delete: { method: 'POST', params: {}, isArray: true }
        })
    }
}]);