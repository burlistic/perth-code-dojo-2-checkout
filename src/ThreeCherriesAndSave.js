// Module pattern example

// creating namespace.. but checking it doesn't get overwritten if it alredy exists
window.willSuperStore = window.willSuperStore || {};

// passing in undefined in case it get polluted
(function (willSuperStore, undefined) {
    // enforcing strict mode
    "use strict";

    // TODO - refactor to be a generic discount

    // Common convention to make modules uppercase but prefer to keep lint tool happy
    function threeCherriesAndSave() {

        this.apply = function(checkout) {
            
            var count = 0;

            for (var i = 0; i < checkout.items.length; i++) {

                if (checkout.items[i].description === "cherry") {
                    count++;
                }
            }

            if (count % 3 === 0) {

                for (var i = 0; i < checkout.items.length; i++) {

                    if (checkout.items[i].description === "cherry") {
                        checkout.items[i].cost = checkout.items[i].cost / 2;
                    }
                }
            } else if (count % 3 === 1) {

                console.log(count % 3 === 1);

                for (var i = 0; i < checkout.items.length; i++) {

                    if (checkout.items[i].description === "cherry" && i != 3) {
                        checkout.items[i].cost = checkout.items[i].cost / 2;
                    }
                }
            }
        }
    }

    // expose access to the constructor
    willSuperStore.ThreeCherriesAndSave = threeCherriesAndSave;

})(window.willSuperStore);    