angular.module('carRent').directive('contact', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: constants.componentsPath + 'footer/footer.html',
            controller: [
                '$scope',
                function ($scope) {
                    var vm = {}
                    $scope.vm = vm;
                }
            ]
        };
    }
]);