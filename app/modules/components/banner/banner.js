angular.module('carRent').directive('banner', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            scope: {
                image: '='
            },
            templateUrl: constants.componentsPath + 'banner/banner.html',
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