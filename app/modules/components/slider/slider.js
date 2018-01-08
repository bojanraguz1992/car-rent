angular.module('carRent').directive('slider', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            scope: {
                images: '=',
                imageLoaded: '='
            },
            templateUrl: constants.componentsPath + 'slider/slider.html',
            controller: [
                '$scope',
                '$window',
                '$interval',
                function ($scope, $window, $interval) {
                    var vm = {
                        active: 0,
                        transition: '0.4',
                        sliderLength: $scope.images.length - 1
                    }

                    $scope.vm = vm;

                    vm.getWindowWidth = function () {
                        return document.getElementById('slider').clientWidth;
                    }

                    angular.element($window).bind('resize', function () {
                        var vm = $scope;
                        $scope.$apply(function () {
                            vm.animateSlides(vm.active, 0);
                        })
                    });

                    vm.goToSlide = function (index) {
                        var slideDiffrence = 0;
                        index = index === -1 ? vm.sliderLength : index;
                        index = index === vm.sliderLength + 1 ? 0 : index;
                        slideDiffrence = Math.abs(vm.active - index);
                        vm.active = index;
                        vm.animateSlides(index, vm.transition * slideDiffrence);
                    }

                    vm.animateSlides = function (index, transition) {
                        vm.sliderStyle = {
                            transform: 'translate3d(' + (-index * vm.getWindowWidth()) + 'px,0px, 0px)',
                            transition: transition + 's'
                        }

                        vm.setTransitionDelay = {
                            transitionDelay: transition - 0.2 + 's'
                        }
                    }

                }
            ]
        };
    }
]);