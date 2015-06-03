var allureCtrl = angular.module('allureCtrl', []);

allureCtrl.controller('AllureCtrl', ['$scope', 'StartApp', '$location',
    function($scope, StartApp, $location) {

        $scope.app = {};
        $scope.suppliers = [];
        $scope.customer = {};
        $scope.stocks = [];

        $scope.activeOption = '';

        $scope.changeMenu = function(option) {
            $scope.activeOption = option;
        };

        StartApp.get().$promise.then(function(app) {
            $scope.app = app;
            $scope.activeOption = $location.$$url;
        });

}]);