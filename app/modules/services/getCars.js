angular
    .module('carRent')
    .factory('getCarsService', ['$http', function getCarsService($http) {
        'use strict';
        var services = {};
        var carEndpoint = '/app/modules/common/data/cars.json';

        services.getAllCars = function () {
            return $http.get(carEndpoint);
        }

        return services;

    }]);