angular
.module('carRent')
.directive('customLayout', [
    'constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.layout + 'custom-layout.html',
            scope: {},
            controller: [
                '$scope',
                function ($scope) {
                    var vm = {};
                    $scope.vm = vm;
                }
            ]
        };
    }
]);