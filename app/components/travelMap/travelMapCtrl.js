(function() {
'use strict';

angular
	.module('LauraApp')
	.controller('travelMapCtrl',travelMapCtrl);

travelMapCtrl.$inject = [
    '$http','$scope',
];

function travelMapCtrl($http,$scope) {

    var tVm = $scope;

    // purple,blue,indigo,cyan,green,gray
    // tVm.stateColors = ['#BA68C8','#64B5F6','#7986CB','#4DD0E1','#81C784','#90A4A'];
    tVm.createstateTravels = createstateTravels;
    tVm.hoverOnState = hoverOnState;

    tVm.states = ['AL','AS','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL',
            'IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM',
            'NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA',
            'WA','WV','WI','WY'];

    function hoverOnState(region) { 

        $scope.stateHovered = region;
    }

    function createstateTravels() {
        var dataTemp = {};
        angular.forEach(tVm.states, function (state, key) {
            dataTemp[state] = {value: Math.random()}
        });
        tVm.stateTravels = dataTemp;
    }

	activate();

	function activate() {
        createstateTravels();

        $http.get('/components/travelMap/stateData.json').then(function successCallback(response) {
            tVm.allTheStates = response.data;
          }, function errorCallback(response) {

          });
	}
}

// IIFE
})();