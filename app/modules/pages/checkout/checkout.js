angular.module('carRent').directive('checkoutPage', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.pagePath + 'checkout/checkout.html',
            controller: [
                '$scope',
                '$stateParams',
                function ($scope, $stateParams) {
                    var vm = {
                        car: $stateParams.checkout,
                    }
                    $scope.vm = vm;

                    function getPrice(){
                        vm.dayDiff = Math.floor((moment(vm.car.return) - moment(vm.car.pickup)) / 86400000);
                        vm.price = vm.dayDiff * vm.car.price;
                    }

                    getPrice();
                }
            ]
        };
    }
]);