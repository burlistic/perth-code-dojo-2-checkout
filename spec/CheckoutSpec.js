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

	it("should apply the 2 for 3 apples discount and return the correct total", function () {

	    checkout.addDiscount(new willSuperStore.ThreeForTwoAppleDiscount());

	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("apple", 1));

	    expect(checkout.total()).toEqual(2);
	});

	it("should apply the 2 for 3 apples discount and return the correct total when 4 apples are purchased", function () {

	    checkout.addDiscount(new willSuperStore.ThreeForTwoAppleDiscount());

	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("apple", 1));

	    expect(checkout.total()).toEqual(3);
	});

	it("should apply the 2 for 3 apples discount and return the correct total when 4 apples are purchased along with a cherry in the midldle", function () {

	    checkout.addDiscount(new willSuperStore.ThreeForTwoAppleDiscount());

	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("cherry", 1));
	    checkout.addItem(new willSuperStore.Item("apple", 1));
	    checkout.addItem(new willSuperStore.Item("apple", 1));

	    expect(checkout.total()).toEqual(4);
	});

});