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

	it("should apply buy 3 cherries and save 7.5 discount and return the correct total when 3 cherries are purchased", function () {

	    checkout.addDiscount(new willSuperStore.ThreeCherriesAndSave());

	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    
	    expect(checkout.total()).toEqual(7.5);
	});


	it("should apply buy 3 cherries and save 7.5 discount and return the correct total when 4 cherries are purchased", function () {

	    checkout.addDiscount(new willSuperStore.ThreeCherriesAndSave());

	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));

	    expect(checkout.total()).toEqual(12.5);
	});

	it("should apply buy 3 cherries and save 7.5 discount and return the correct total when 5 cherries are purchased", function () {

	    checkout.addDiscount(new willSuperStore.ThreeCherriesAndSave());

	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	    checkout.addItem(new willSuperStore.Item("cherry", 5));

	    expect(checkout.total()).toEqual(17.5);
	});

	it("no discount should be applied when buying 1 cherry", function () {

	    checkout.addDiscount(new willSuperStore.ThreeCherriesAndSave());

	    checkout.addItem(new willSuperStore.Item("cherry", 5));
	  
	    expect(checkout.total()).toEqual(5);
	});

	it("should return correct discount when cherries reduced by 20%", function () {

	    checkout.addDiscount(new willSuperStore.Reduction("cherry", 0.2));

	    checkout.addItem(new willSuperStore.Item("cherry", 5));

	    expect(checkout.total()).toEqual(4);
	});

	it("should return correct discount when cherries reduced by 50%", function () {

	    checkout.addDiscount(new willSuperStore.Reduction("cherry", 0.5));

	    checkout.addItem(new willSuperStore.Item("cherry", 5));

	    expect(checkout.total()).toEqual(2.5);
	});

    // todo - test combining apple and cherry discunts

    // todo - write test to make sure only one discount is appied to cheeries. How to pick which discount? Price reduction always first?

});