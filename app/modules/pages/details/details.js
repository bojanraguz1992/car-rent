angular.module('carRent').directive('carList', ['constants',
function (constants) {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: constants.pagePath + 'details/details.html',
        controller: [
            '$scope',
            function ($scope) {
                var vm = {}
                $scope.vm = vm;
            }
        ]
    };
}
]);