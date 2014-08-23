// Module pattern example

// creating namespace.. but checking it doesn't get overwritten if it alredy exists
window.willSuperStore = window.willSuperStore || {};

// passing in undefined in case it get polluted
(function (willSuperStore, undefined) {
    // enforcing strict mode
    "use strict";

    // TODO - refactor to be a generic discount

    // Common convention to make modules uppercase but prefer to keep lint tool happy
    function Reduction(itemDescription, percentage) {

        this.apply = function(checkout) {
            
            for (var i = 0; i < checkout.items.length; i++) {

                if (checkout.items[i].description === itemDescription) {
                    checkout.items[i].cost = checkout.items[i].cost * (1 - percentage);
                }
            }
        }
    }

    // expose access to the constructor
    willSuperStore.Reduction =  Reduction;

})(window.willSuperStore);    