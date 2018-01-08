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
                        navigationItems: [
                            {
                                title: 'Home'
                            },
                            {
                                title: 'About'
                            },
                            {
                                title: 'Offer'
                            },
                            {
                                title: 'Contact'
                            }
                        ]
                    }
                    $scope.vm = vm;
                }
            ]
        };
    }
]);