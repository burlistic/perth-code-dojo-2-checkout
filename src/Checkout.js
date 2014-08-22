// Module pattern example

// creating namespace
window.willSuperStore = window.willSuperStore || {};

// passing in undefined incase it get poluted
(function (willSuperStore, undefined) {
    // enforcing strict mode
    "use strict";

    // Common convention to make modules uppercase but prefer to keep lint tool happy
    function checkout() {

        this.total = function total() {
            return 0;
        };
    }

    // expose access to the constructor
    willSuperStore.Checkout = checkout;

})(window.willSuperStore);    