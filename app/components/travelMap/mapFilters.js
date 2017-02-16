(function() {
'use strict';

    angular.module('LauraApp').filter('stateColor', [function () {
        return function (input) {
            // console.log(input)
            // var b = 255 - Math.floor(input * 255);
            // var g = Math.floor(input * 255);
            // return "rgba(255," + g + "," + b + ",1)";
            var idx = Math.random() * (0 - 5) + 0;
            var stateColors = 
                ['#BA68C8','#64B5F6','#7986CB','#4DD0E1',
                '#81C784','#90A4A'];
            return stateColors[idx];
        };
    }]);

// IIFE
})();