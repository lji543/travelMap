(function() {
'use strict';

angular
	.module('LauraApp')
	.controller('homePageCtrl',homePageCtrl);

homePageCtrl.$inject = ['$location','$scope'];

function homePageCtrl($location,$scope) {

    var hVm = this;

    hVm.skills = [
        {
            name: 'Javascript, AngularJS',
            photo: '/images/arrows.png',
        },
        {
            name: 'HTML, CSS/SASS',
            photo: '/images/arrows.png',
        },
        {
            name: 'Python, Flask',
            photo: '/images/arrows.png',
        },        
    ];

	activate();

	function activate() {
         console.log($location.path())
	}
}

// IIFE
})();