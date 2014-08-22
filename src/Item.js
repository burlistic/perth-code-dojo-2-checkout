// Module pattern example

// creating namespace.. but checking it doesn't get overwritten if it alredy exists
window.willSuperStore = window.willSuperStore || {};

// passing in undefined in case it get polluted
(function (willSuperStore, undefined) {
    // enforcing strict mode
    "use strict";

    // Common convention to make modules uppercase but prefer to keep lint tool happy
    function item(description, cost) {

        this.description = description;
        this.cost = cost;
    }

    // expose access to the constructor
    willSuperStore.Item = item;

})(window.willSuperStore);    