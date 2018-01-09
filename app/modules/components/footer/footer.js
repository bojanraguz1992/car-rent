angular.module('carRent').directive('contact', ['constants',
    function (constants) {
        'use strict';
        return {
            restrict: 'EA',
            templateUrl: constants.componentsPath + 'footer/footer.html'
        };
    }
]);