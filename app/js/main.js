'use strict';

angular
    .module('caddisApp.main', ['ngMaterial'])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($mdDialog,$sce,$scope) {

    var s = $scope;

    // Toggles for open/close of search dropwdowns
    s.showBud = false;
    s.showLoc = false;

    // s.featured;

    s.openSearchMenu = openSearchMenu;

    // Array of shows to iterate through

    // TODO: filter for this? tablet size, 
    // would need to remove the first event in the array
    // if window width is x, remove index zero from the array? start at 1 
    // in array and only show 
    s.events = [
        {
            _id:'kenny',
            artist: $sce.trustAsHtml('Kenny Chesney w&sol; Grace Potter'),
            city: 'Nashville',
            genre: 'Country',
            maxprice: 260,
            minprice: 30,
            photo:'../images/kenny.png',
            state: 'Tennessee',
        },
        {
            _id:'gerald',
            artist: 'Gerald Albright Band',
            city: 'Atlanta',
            genre: 'Jazz',
            maxprice: 15,
            minprice: 90,
            photo:'../images/gerald.png',
            state: 'Georgia',
        },
        {
            _id:'rock',
            artist: 'The Rock Church',
            city: 'Birmingham',
            genre: 'Electronic',
            maxprice: 20,
            minprice: 40,
            photo:'../images/rock.png',
            state: 'Alabama',
        }
    ];

    activate();

    /* PUBLIC FN's */

    function openSearchMenu($mdOpenMenu, ev) {
        // if (list==='loc') {
        //     s.showLoc = true;
        //     console.log(list)
        // }

        // if (list==='bud') {
        //     s.showBud = true;
        // }
        $mdOpenMenu(ev);
    }

    /* PRIVATE FN's */

    function _filterEvents() {
        var width = window.innerWidth;
        // need to add a watcher for a resize, so we can add the featured back in

        if (width > 320) {
            s.featured = s.events.splice(0,1);
        }
        // console.log(s.events)
        // console.log(s.featured)
    }

    /* INITIALIZATION */

    function activate() {

        _filterEvents();
        // console.log(s.featured)
    }

}