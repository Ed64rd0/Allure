var allure = angular.module('allureApp', ['ngRoute', 'allureCtrl', 'supplierCtrl', 'eventsCtrl',
    'customerCtrl', 'stockCtrl', 'allure-service', 'supplier-service', 'stock-service']);

allure.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'allure/allure.html'
        }).
        when('/contactos', {
            templateUrl: 'supplier/supplier.html',
            controller: 'SupplierCtrl'
        }).
        when('/eventos', {
            templateUrl: 'event/events.html',
            controller: 'EventsCtrl'
        }).
        when('/clientes', {
            templateUrl: 'customer/customers.html',
            controller: 'CustomerCtrl'
        }).
        when('/inventario', {
            templateUrl: 'stock/stock.html',
            controller: 'StockCtrl'
        }).
        when('/agregarItem', {
            templateUrl: 'stock/add_item.html'
        }).
        when('/agregarContacto', {
            templateUrl: 'supplier/add_supplier.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
