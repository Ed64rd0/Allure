var allureCtrl = angular.module('allureCtrl', []);

allureCtrl.controller('AllureCtrl', ['$scope', 'StartApp', '$location',
    function($scope, StartApp, $location) {

    $scope.application = {};
    $scope.suppliers = [];
    $scope.customer = {};
    $scope.stocks = [];

    $scope.activeOption = '';

    $scope.changeMenu = function(option) {
        $scope.activeOption = option;
    };

    $scope.init = function() {
        $scope.application = StartApp.get();
        $scope.activeOption = $location.$$url;
    };

    $scope.init();
}]);