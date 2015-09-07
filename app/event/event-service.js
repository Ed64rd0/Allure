var eventService = angular.module('event-service', ['ngResource']);

eventService.factory('Event', ['$resource', function($resource) {
    return {
        startEvent: $resource('http://localhost:8080/allureWeb/allure/event', {}, {
            get: {method: 'GET', params: {}, isArray: false}
        })
    }
}]);