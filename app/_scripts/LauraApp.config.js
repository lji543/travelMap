(function() {
'use strict';

angular
    .module('LauraApp')
    .config(configure);

configure.$inject = ['$animateProvider','$httpProvider',
    '$mdIconProvider','$mdThemingProvider',
    '$routeProvider'];

function configure($animateProvider, $httpProvider,
    $mdIconProvider, $mdThemingProvider,$routeProvider ) {
    console.log('config')
    // Declare the routes
    $routeProvider
        .when('/travelMap', {
            controller: 'travelMapCtrl',
            controllerAs: 'tVm',
            templateUrl: '/components/travelMap/travelMap.html',
            reloadOnSearch: false,
        })
        .otherwise({
            controller: 'homePageCtrl',
            controllerAs: 'hVm',
            templateUrl: '/components/homePage/homePage.html',
            reloadOnSearch: false,            
        });
}

// IIFE
})();