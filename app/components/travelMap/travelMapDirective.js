(function() {
'use strict';

    angular.module('LauraApp')
        .directive('svgMap', ['$compile', function ($compile) {
            return {
                restrict: 'A',
                templateUrl: '/images/usamap.svg',
                link: function (scope, element, attrs) {
                    var regions = element[0].querySelectorAll('.state');
                    angular.forEach(regions, function (path, key) {
                        var regionElement = angular.element(path);
                        regionElement.attr("region", "");
                        regionElement.attr("state-travels", "stateTravels");
                        regionElement.attr("state-hovered", "stateHovered");
                        $compile(regionElement)(scope);
                    });
                }
            };
        }])
        .directive('region', ['$compile', function ($compile) {
            return {
                restrict: 'A',
                scope: {
                    stateTravels: "=",
                    stateHovered: "=",
                },

                link: function (scope, element, attrs) {
                    scope.colorTheState = colorTheState;
                    scope.regionClick = regionClick;
                    scope.regionMouseOver = regionMouseOver;

                    scope.elementId = element.attr("id");

                    function colorTheState() {
                        var idx = Math.round(Math.random() * (0 - 5) + 0)*-1;
                        var stateColors = 
                            // deep purple,light blue,indigo,
                            // lime,light green,blue gray
                            ['#9575CD','#4FC3F7','#7986CB',
                            '#DCE775','#AED581','#90A4A'];
                        var statesVisited = ['AL','AZ','CA','DE','ID','IL',
                            'IN','KY','LA','MD','MA','ME','MI','MS','MO','MT','NH','NJ',
                            'NY','NC','OH','PA','RI','SD','TN','TX','VA',
                            'WA','WV','WY'];
                        scope.stateColor = stateColors[idx];
                    }

                    function regionClick () {
                        // console.log(stateColor)
                        // alert(scope.stateTravels[scope.elementId].value);
                    }
                    function regionMouseOver() {
                        scope.stateHovered = scope.elementId;
                        element[0].parentNode.appendChild(element[0]);
                    }

                    colorTheState();

                    element.attr("ng-click", "regionClick()");
                    // element.attr("ng-attr-fill", "{{stateTravels[elementId].value | stateColor}}");
                    element.attr("ng-attr-fill", "{{stateColor}}");
                    element.attr("ng-mouseover", "regionMouseOver()");
                    element.attr("ng-class", "{active:stateHovered==elementId}"); 
                    element.removeAttr("region");
                    $compile(element)(scope);
                }
            };
        }]);

// IIFE
})();