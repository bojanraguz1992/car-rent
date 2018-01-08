angular.module('carRent').directive('aboutDirective', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.componentsPath + 'about/about.html',
            controller: [
                '$scope', 'getCarsService',
                function ($scope, getCarsService) {
                    var vm = { 
                        carLimit: 3,
                        carPhotos: []
                    }
                    $scope.vm = vm;
                    vm.getCarsByLimit = function(){
                        getCarsService.getAllCars().then(function(res){
                            if(res.status === 200){
                                for(var i = 0; i < vm.carLimit; i++){
                                    vm.carPhotos.push(res.data[i].thumbnail);
                                }
                            }
                        });
                    }

                    vm.getCarsByLimit();

                }
            ]
        };
    }
]);