(function() {
'use strict';

angular.module('LauraApp',['ngMaterial','ngRoute']);

angular
	.module('LauraApp')
    .config(LauraAppConfig)
	.run(LauraAppRun);

LauraAppConfig.$inject('$locationProvider');

function LauraAppConfig($locationProvider) {
    $locationProvider.html5Mode(true);
}

LauraAppRun.$inject = ['$location'];

function LauraAppRun(
	$location
	// $mdDialog,
	// $mdToast,
	// $rootScope,
	// $route
	) {

	function activate() {

	}

}


// IIFE
})();