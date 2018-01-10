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

                    if (vm.car === null) {
                        $state.go('master.cars');
                    }
                }
            ]
        };
    }
]);