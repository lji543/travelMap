(function() {
'use strict';

angular
    .module('LauraApp')
    .config(configure);

configure.$inject = ['$animateProvider','$httpProvider','$locationProvider',
    '$mdIconProvider','$mdThemingProvider',
    '$routeProvider'];

function configure($animateProvider, $httpProvider,$locationProvider,
    $mdIconProvider, $mdThemingProvider,$routeProvider ) {
    $locationProvider.html5Mode(true);

    // Declare the routes
    $routeProvider
        .when('/travelmap', {
            controller: 'components/travelMap/travelMapCtrl',
            controllerAs: 'tVm',
            templateUrl: 'components/travelMap/travelMap.html',
            reloadOnSearch: false,
        })
        .otherwise({
            controller: 'travelMapCtrl',
            controllerAs: 'tVm',
            templateUrl: 'components/travelMap/travelMap.html',
            reloadOnSearch: false,
        });
        // .otherwise({
        //     controller: 'homePageCtrl',
        //     controllerAs: 'hVm',
        //     templateUrl: 'components/homePage/homePage.html',
        //     reloadOnSearch: false,            
        // });
}

// IIFE
})();