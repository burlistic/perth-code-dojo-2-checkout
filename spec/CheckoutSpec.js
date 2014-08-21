describe("Checkout", function() {

	beforeEach(function() {
	    //willsSuperStore.Checkout = new willsSuperStore.Checkout();
	     checkout = new Checkout();
	});


	it("should return zero total when empty", function() {

	    //expect(willsSuperStore.Checkout.total).toEqual(0);
	    expect(checkout.total()).toEqual(0);
	});

	//it("should return the correct running total", function() {

	//    willsSuperStore.Checkout.addItem(new willsSuperStore.Item("apple", 1));
	//    willsSuperStore.Checkout.addItem(new willsSuperStore.Item("apple", 1));

	//    expect(willsSuperStore.Checkout.total).toEqual(2);
	//});

});