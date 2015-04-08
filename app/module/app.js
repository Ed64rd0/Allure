var allure = angular.module('allureApp', ['ngRoute', 'allureCtrl', 'supplierCtrl', 'eventsCtrl',
    'customerCtrl', 'AllureService']);

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
            templateUrl: 'event/events.html'
        }).
        when('/clientes', {
            templateUrl: 'customer/customers.html',
            controller: 'CustomerCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
