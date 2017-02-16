(function() {
'use strict';

angular.module('LauraApp',['ngMaterial','ngRoute']);

angular
	.module('LauraApp')
	.run(LauraAppRun);

LauraAppRun.$inject = [];

function LauraAppRun(
	$location,
	$mdDialog,
	$mdToast,
	$rootScope,
	$route
	) {

	// activate();

	function activate() {

	}

}


// IIFE
})();