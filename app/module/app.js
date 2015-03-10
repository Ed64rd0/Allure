var allure = angular.module('allureApp', ['ngRoute', 'allureCtrl', 'supplierCtrl']);

allure.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'allure/allure.html'
        }).
        otherwise({
            redirecTo: '/home'
        });
}]);
