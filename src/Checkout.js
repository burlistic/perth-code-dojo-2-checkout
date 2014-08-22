
window.willSuperStore = window.willSuperStore || {};

(function (willSuperStore, undefined) {
    "use strict";

    // normally variables & functions start with a lowercase letter but with modules, that is not the case.
    // The general tradition is to start them with a capital letter instead.
    function Checkout() {

        // `this` refers to the instance of `MyModule` when created
        this.total = function total() {
            return 0;
        };
    }

    // expose access to the constructor
    willSuperStore.Checkout = Checkout;

})(window.willSuperStore);    