var expect = chai.expect;

describe("cardFunction", function() {
    describe("cardConstruction", function() {
        it("should create cards correctly", function() {
            let c1 = new Card(0, 1, 2);
            expect(c1.describeCard()).to.equal("Ace of Hearts");
            let c2 = new Card(1, 2, 3);
            expect(c2.describeCard()).to.equal("Two of Spades");
            let c3 = new Card(12, 10, 1);
            expect(c3.describeCard()).to.equal("King of Diamonds");
        });
    });
});