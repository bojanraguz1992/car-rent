angular.module('carRent').directive('carDetails', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.pagePath + 'carDetails/carDetails.html',
            controller: [
                '$scope',
                'getCarsService',
                '$stateParams',
                '$state',
                function ($scope, getCarsService, $stateParams, $state) {
                    var vm = {
                        minDate: moment().format('l'),
                        updateMaxDate: updateMaxDate,
                        showCheckout: showCheckout,
                        sliderLoaded: false
                    }

                    getCarById();

                    $scope.vm = vm;

                    function updateMaxDate() {
                        vm.maxDate = moment(vm.car.pickup).toDate();
                        var EndTime = moment(vm.car.return).toDate();

                        // update max date if start time is bigger
                        if (EndTime < vm.maxDate) {
                            vm.car.return = angular.copy(vm.maxDate);
                        }
                    }

                    function showCheckout() {
                        vm.showModal = true;
                    }

                    function getCarById() {
                        getCarsService.getAllCars().then(function (res) {
                            for (var i = 0; i < res.data.length; i++) {
                                if (res.data[i].id === parseInt($stateParams.carId)) {
                                    vm.carDetails = res.data[i];
                                    break;
                                }
                            }

                            if (vm.carDetails === undefined) {
                                $state.go('master.cars');
                            } else {
                                vm.car = {
                                    name: vm.carDetails.name,
                                    price: vm.carDetails.price,
                                    thumbnail: vm.carDetails.thumbnail,
                                    pickup: moment().format('l'),
                                    return: moment().add(1, 'days').format('l')
                                }
                                // avoid slider problem on load
                                vm.sliderLoaded = true;
                            }
                        });
                    }

                }
            ]
        };
    }
]);