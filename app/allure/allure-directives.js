var allureDirective = angular.module('allure-directives', []);

allureDirective.directive('onlyDigits', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return;
            ngModel.$parsers.unshift(function (inputValue) {
                var digits = inputValue.split('').filter(function (s) {
                    return (!isNaN(s) && s != ' ');
                }).join('');
                ngModel.$viewValue = digits;
                ngModel.$render();
                return digits;
            });
        }
    };
});

allureDirective.directive('differentWords', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return;
            var regex=/^[a-zA-Z ]*$/;
            ngModel.$parsers.unshift(function (inputValue) {
                var value = inputValue;
                if (regex.test(value)) {
                    ngModel.$viewValue = value;
                } else {
                    value = value.slice(0, inputValue.length - 1);
                    ngModel.$viewValue = value;
                }
                ngModel.$render();
                return value;
            });
        }
    };
});

allureDirective.directive('oneWord', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return;
            ngModel.$parsers.unshift(function (inputValue) {
                var digits = inputValue.split('').filter(function (s) {
                    return (isNaN(s) && s != ' ');
                }).join('');
                ngModel.$viewValue = digits;
                ngModel.$render();
                return digits;
            });
        }
    };
});