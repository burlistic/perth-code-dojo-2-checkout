// Module pattern example

// creating namespace
window.willSuperStore = window.willSuperStore || {};

// passing in undefined in case it get polluted
(function (willSuperStore, undefined) {
    // enforcing strict mode
    "use strict";

    // Common convention to make modules uppercase but prefer to keep lint tool happy
    function checkout() {

        // TODO - make private
        this.items = new Array();

        this.total = function total() {

            if (this.items.length === 0) {
                return 0;
            }

            var runningTotal = 0;

            for (var i = 0; i < this.items.length; i++) {
                // TODO - type check?
                runningTotal = runningTotal + this.items[i].cost;
            }

            return runningTotal;
        };

        this.addItem = function addItem(item) {

            // TODO - better way to add to an array?
            this.items[this.items.length] = item;
        }
    
    }


    // expose access to the constructor
    willSuperStore.Checkout = checkout;

})(window.willSuperStore);    