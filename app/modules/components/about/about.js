angular.module('carRent').directive('aboutDirective', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.componentsPath + 'about/about.html',
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