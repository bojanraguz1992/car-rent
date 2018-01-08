angular.module('carRent').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        'use strict';
        $stateProvider
            .state('master', {
                abstract: true,
                template: '<custom-layout></custom-layout>'
            })
            .state('master.home', {
                url: '/',
                title: 'Početna',
                template: '<homepage></homepage>'
            })
            .state('master.cars', {
                url: '/cars',
                template: '<car-list></car-list>'
            })
            .state('master.checkout', {
                url: '/checkout',
                params: {
                    checkout: ''
                },
                template: '<checkout-page></checkout-page>'
            })
            .state('master.car', {
                url: '/cars/{carId}',
                params: {
                    carDetails: ''
                },
                template: '<car-details></car-details>'
            });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);

    }
]);