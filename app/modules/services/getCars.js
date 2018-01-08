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

    }]).directive('scrollTo', function ($location, $anchorScroll) {
        return function(scope, element, attrs) {
      
          element.bind('click', function(event) {
              event.stopPropagation();
              var off = scope.$on('$locationChangeStart', function(ev) {
                  off();
                  ev.preventDefault();
              });
              var location = attrs.scrollTo;
              $location.hash(location);
              $anchorScroll();
          });
      
        };
      });;