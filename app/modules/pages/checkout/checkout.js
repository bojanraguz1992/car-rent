angular.module('carRent').directive('checkoutPage', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.pagePath + 'checkout/checkout.html',
            controller: [
                '$scope',
                '$stateParams',
                '$state',
                function ($scope, $stateParams, $state) {
                    var vm = {
                        car: $stateParams.checkout,
                    }
                    $scope.vm = vm;

                    function getPrice() {
                        if (vm.car !== null) {
                            vm.dayDiff = Math.floor((moment(vm.car.return) - moment(vm.car.pickup)) / 86400000);
                            
                            if(vm.dayDiff === 0){
                                vm.dayDiff = 1;
                            }

                            vm.price = vm.dayDiff * vm.car.price;
                        } else{
                            $state.go('master.cars');
                        }
                    }

                    getPrice();
                }
            ]
        };
    }
]);