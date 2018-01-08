angular.module('carRent').directive('carSearch', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.componentsPath + 'carSearch/carSearch.html',
            controller: [
                '$scope',
                'getCarsService',
                '$timeout',
                function ($scope, getCarsService, $timeout) {
                    var vm = {}

                    $scope.vm = vm;
                    getCarsService.getAllCars().then(function (res) {
                        if (res.status === 200) {
                            // just for test data show loader
                            vm.cars = res.data;
                            $timeout(function () {
                                vm.dataLoaded = true;
                            }, 1500);
                        }
                    });
                }
            ]
        };
    }
]);