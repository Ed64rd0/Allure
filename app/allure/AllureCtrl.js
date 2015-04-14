var allureCtrl = angular.module('allureCtrl', []);

allureCtrl.controller('AllureCtrl', ['$scope', 'StartApp', function($scope, StartApp) {

    $scope.application = {};
    $scope.supplier = {};
    $scope.customer = {};

    $scope.activeOption = 'Home';

    $scope.changeMenu = function(option) {
        $scope.activeOption = option;
    };

    $scope.init = function() {
        $scope.application = StartApp.get();
    };

    $scope.init();
}]);