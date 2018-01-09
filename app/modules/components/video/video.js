angular.module('carRent').directive('videoDirective', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.componentsPath + 'video/video.html',
            controller: [
                '$scope',
                '$timeout',
                function ($scope, $timeout) {
                    var vm = {}
                    $scope.vm = vm;

                    vm.playVideo = function () {
                        vm.showLoader = true;
                        vm.showVideoModal = true;
                    }

                    vm.closeModal = function () {
                        vm.showVideoModal = false;
                    }

                    vm.hideLoader = function () {
                        $timeout(function () {
                            vm.showLoader = false;
                        }, 1500);
                    }
                }
            ]
        };
    }
]);