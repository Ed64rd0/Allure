var allureCtrl = angular.module('allureCtrl', []);

allureCtrl.controller('AllureCtrl', ['$scope', function($scope) {

    $scope.supplier = {};
    $scope.customer = {};

    $scope.navOptions = [{
        'nav' : '/home',
        'label' : 'Home',
        'icon' : 'glyphicon glyphicon-home'
    }, {
        'nav' : '/contactos',
        'label' : 'Contactos',
        'icon' : 'glyphicon glyphicon-book'
    }, {
        'nav' : '/eventos',
        'label' : 'Eventos',
        'icon' : 'glyphicon glyphicon-star'
    }, {
        'nav' : '/clientes',
        'label' : 'Clientes',
        'icon' : 'glyphicon glyphicon-user'
    }];

    $scope.activeOption = 'Home';

    $scope.changeMenu = function(option) {
        $scope.activeOption = option;
    }

}]);