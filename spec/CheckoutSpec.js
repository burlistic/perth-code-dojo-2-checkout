describe("Checkout", function() {

	beforeEach(function() {
	    //willSuperStore.Checkout = new willsSuperStore.Checkout();
	    checkout = new willSuperStore.Checkout();
	});


	it("should return zero total when empty", function() {

	    //expect(willSuperStore.Checkout.total).toEqual(0);
	    expect(checkout.total()).toEqual(0);
	});

	//it("should return the correct running total", function() {

	//    willSuperStore.Checkout.addItem(new willSuperStore.Item("apple", 1));
	//    willSuperStore.Checkout.addItem(new willSuperStore.Item("apple", 1));

	//    expect(willSuperStore.Checkout.total).toEqual(2);
	//});

});