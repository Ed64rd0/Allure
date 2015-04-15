var allure = angular.module('allureApp', ['ngRoute', 'allureCtrl', 'supplierCtrl', 'eventsCtrl',
    'customerCtrl', 'stockCtrl', 'AllureService', 'SupplierService']);

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
        otherwise({
            redirectTo: '/home'
        });
}]);
