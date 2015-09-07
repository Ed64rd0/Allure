var eventCtrl = angular.module('eventsCtrl', []);

eventCtrl.controller('EventsCtrl', ['$scope', 'Event', '$location', function($scope, Event, $location){

    $scope.columns = 0;
    $scope.event = {};

    Event.startEvent.get().$promise.then(function(app) {
        $scope.event = app;
    });


    $scope.addColumns = function() {
        for (var i = 0; i < $scope.columns; i++) {
            $scope.component = {'name': null, 'quantity' : null, 'price' : null, 'total' : null};
            $scope.event.components.push($scope.component);
        };
        $scope.columns = 0;
    }

    $scope.saveEstimate = function() {

    }
}]);
