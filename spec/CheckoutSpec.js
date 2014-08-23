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

	    checkout.addItem(new willSuperStore.Item("apple", 0.5));

	    expect(checkout.total()).toEqual(0.5);
	});

	it("should return the correct running total when several items are added", function () {

	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));

	    expect(checkout.total()).toEqual(6);
	});

	it("should apply the 2 for 3 apples discount and return the correct total", function () {

	    checkout.addDiscount(new willSuperStore.ThreeForTwoAppleDiscount());

	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("apple", 0.5));

	    expect(checkout.total()).toEqual(1);
	});

	it("should apply the 2 for 3 apples discount and return the correct total when 4 apples are purchased", function () {

	    checkout.addDiscount(new willSuperStore.ThreeForTwoAppleDiscount());

	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("apple", 0.5));

	    expect(checkout.total()).toEqual(1.5);
	});

	it("should apply the 2 for 3 apples discount and return the correct total when 4 apples are purchased along with a cherry in the midldle", function () {

	    checkout.addDiscount(new willSuperStore.ThreeForTwoAppleDiscount());

	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("apple", 0.5));
	    checkout.addItem(new willSuperStore.Item("apple", 0.5));

	    expect(checkout.total()).toEqual(6.5);
	});

});