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
        this.discounts = new Array();

        this.total = function total() {

            if (this.items.length === 0) {
                return 0;
            }

            // Apply discounts
            for (var i = 0; i < this.discounts.length; i++) {
                // TODO - type check?
                this.discounts[i].apply(this);
            }

            // Calculate the total
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

        this.addDiscount = function addDiscount(discount) {

            this.discounts[this.discounts.length] = discount;
        }
    
    }


    // expose access to the constructor
    willSuperStore.Checkout = checkout;

})(window.willSuperStore);    