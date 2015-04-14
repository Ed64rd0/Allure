var allureService = angular.module('AllureService', ['ngResource']);

allureService.factory('StartApp', ['$resource', function($resource) {
    return $resource('http://localhost:8080/allureWeb/allure/application', {}, {
       get: {method:'GET', params: {}, isArray:false}
    });
}]);