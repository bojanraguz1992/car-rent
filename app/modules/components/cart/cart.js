angular.module('carRent').directive('cart', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            scope: {
                details: '='
            },
            templateUrl: constants.componentsPath + 'cart/cart.html',
            controller: [
                '$scope',
                '$state',
                function ($scope, $state) {
                    var vm = {}
                    $scope.vm = vm;

                    function getPrice() {
                        vm.dayDiff = Math.floor((moment($scope.details.return) - moment($scope.details.pickup)) / 86400000);

                        if (vm.dayDiff === 0) {
                            vm.dayDiff = 1;
                        }

                        vm.price = vm.dayDiff * $scope.details.price;
                    }

                    getPrice();
                }
            ]
        };
    }
]);