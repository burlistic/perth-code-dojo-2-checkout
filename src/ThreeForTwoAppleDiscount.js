// Module pattern example

// creating namespace.. but checking it doesn't get overwritten if it alredy exists
window.willSuperStore = window.willSuperStore || {};

// passing in undefined in case it get polluted
(function (willSuperStore, undefined) {
    // enforcing strict mode
    "use strict";

    // TODO - refactor to be a generic discount

    // Common convention to make modules uppercase but prefer to keep lint tool happy
    function threeForTwoAppleDiscount() {

        this.apply = function(checkout) {
            
            var applesCount = 0;

            for (var i = 0; i < checkout.items.length; i++) {

                if (checkout.items[i].description === "apple") {

                    applesCount++;

                    if (applesCount > 2) {
                        checkout.items[i].cost = 0;

                        applesCount = 0;
                    }                   
                }

            }

        }
    }

    // expose access to the constructor
    willSuperStore.ThreeForTwoAppleDiscount = threeForTwoAppleDiscount;

})(window.willSuperStore);    