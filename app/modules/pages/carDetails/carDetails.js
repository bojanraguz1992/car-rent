angular.module('carRent').directive('carDetails', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.pagePath + 'carDetails/carDetails.html',
            controller: [
                '$scope',
                '$stateParams',
                function ($scope, $stateParams) {
                    var vm = {
                        carDetails: $stateParams.carDetails,
                        minDate: moment().format('l'),
                        updateMaxDate: updateMaxDate,
                        showCheckout: showCheckout,
                        car: {
                            name: $stateParams.carDetails.name,
                            price: $stateParams.carDetails.price,
                            thumbnail: $stateParams.carDetails.thumbnail,
                            pickup: moment().format('l'),
                            return: moment().add(1, 'days').format('l')
                        }
                    }

                    $scope.vm = vm;
                    function updateMaxDate() {
                        vm.maxDate = moment(vm.car.pickup).toDate();
                        var EndTime = moment(vm.car.return).toDate();

                        // update max date if start time is bigger
                        if (EndTime < vm.maxDate) {
                            vm.car.return = angular.copy(vm.maxDate);
                        }
                    }

                    function showCheckout(){
                        vm.showModal = true;
                    }

                }
            ]
        };
    }
]);