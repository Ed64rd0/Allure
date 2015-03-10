var allure = angular.module('allureApp' ['ngRoute', 'allureCtrl', 'supplierService']);

allure.config('$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: '',
            controller: 'AllureCtrl'
        }).
        otherwise({
            redirecTo: '/home'
        });
});
