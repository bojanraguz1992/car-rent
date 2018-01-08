angular.module('carRent').directive('homepage', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.pagePath + 'homepage/homepage.html',
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