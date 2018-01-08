angular.module('carRent').directive('carDetails', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.pagePath + 'carDetails/carDetails.html',
            controller: [
                '$scope',
                function ($scope) {
                    var vm = {
                        minDate: moment().format('l'),
                        updateMaxDate: updateMaxDate,
                        showCheckout: showCheckout,
                        car: {
                            pickup: moment().format('l'),
                            return: moment().add(55, 'days').format('l')
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