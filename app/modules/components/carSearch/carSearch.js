angular.module('carRent').directive('carSearch', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.componentsPath + 'carSearch/carSearch.html',
            controller: [
                '$scope',
                'getCarsService',
                function ($scope, getCarsService) {
                    var vm = {}

                    getCarsService.getAllCars().then(function (res) {
                        if(res.status === 200){
                            vm.cars = res.data;
                        } 
                    });

                    $scope.vm = vm;

                }
            ]
        };
    }
]);