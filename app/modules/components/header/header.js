angular.module('carRent').directive('headerDirective', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.componentsPath + 'header/header.html',
            controller: [
                '$scope',
                function ($scope) {
                    var vm = {
                        navigationItems: [{
                                title: 'Home',
                                id: 'Home'
                            },
                            {
                                title: 'About',
                                id: 'About'
                            },
                            {
                                title: 'Offer',
                                id: 'Offer'
                            },
                            {
                                title: 'Contact',
                                id: 'Contact'
                            }
                        ]
                    }
                    $scope.vm = vm;

                    vm.toggleMenu = function () {
                        vm.menuOpen = !vm.menuOpen;
                    }

                    vm.closeMenu = function () {
                        vm.menuOpen = false;
                    }
                }
            ]
        };
    }
]);