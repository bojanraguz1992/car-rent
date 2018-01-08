angular.module('carRent').directive('videoDirective', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.componentsPath + 'video/video.html',
            controller: [
                '$scope',
                function ($scope) {
                    var vm = {}
                    $scope.vm = vm;

                    vm.playVideo = function () {
                        vm.showVideoModal = true;
                    }
                }
            ]
        };
    }
]);