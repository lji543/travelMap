(function() {
'use strict';

angular
    .module('LauraApp')
    .controller('navbarCtrl', navbarCtrl);

navbarCtrl.$inject = [
    '$document',
    ];

function navbarCtrl(
    $document
){

    var nVm = this;

    /* SCOPE BINDINGS */
    nVm.isUserDropdownShown = false;
    nVm.showUserDropdown = showUserDropdown;

    activate();

    /* FUNCTION DECLARATIONS */

    function showUserDropdown() {
        
        nVm.isUserDropdownShown = !nVm.isUserDropdownShown;
    }



    function activate() {

    }

}

// IIFE
})();
