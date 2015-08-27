var eventCtrl = angular.module('eventsCtrl', []);

eventCtrl.controller('EventsCtrl', ['$scope', function($scope){

    $scope.event = {
        'personalServiceIds' : [],
        'personalUnselected' : [],
        'room' : []
    };
    $scope.estimate = {};
    $scope.personalServices = new Array();
    $scope.columns = 0;

    $scope.addColumns = function() {
        for (var i = 0; i < $scope.columns; i++) {
            $scope.component = {'name': null, 'quantity' : null, 'price' : null, 'total' : null};
            $scope.app.event.components.push($scope.component);
        };
        $scope.columns = 0;
    }

}]);
