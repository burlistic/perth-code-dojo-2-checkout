describe("Checkout", function() {

	beforeEach(function() {
	    //willSuperStore.Checkout = new willsSuperStore.Checkout();
	    checkout = new willSuperStore.Checkout();
	});

	it("should return zero total when empty", function() {

	    //expect(willSuperStore.Checkout.total).toEqual(0);
	    expect(checkout.total()).toEqual(0);
	});

	it("should return the correct running total when one item is added", function() {

	    checkout.addItem(new willSuperStore.Item("apple", 1));

	    //expect(checkout.total()).toEqual(1);
	});

	it("should return the correct running total when several items are added", function () {

	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("cherry", 1));

	    expect(checkout.total()).toEqual(3);
	});

});