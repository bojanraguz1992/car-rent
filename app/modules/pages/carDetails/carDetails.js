angular.module('carRent').directive('carDetails', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.pagePath + 'carDetails/carDetails.html',
            controller: [
                '$scope',
                function ($scope) {
                    var vm = {
                    }

                    $scope.vm = vm;
                }
            ]
        };
    }
]);