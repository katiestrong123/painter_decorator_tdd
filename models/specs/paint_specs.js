const assert = require("assert");
const Paint = require("../paint");

describe("Paint", function (){
    let magnolia;
    let duckegg;
    let parisGrey;

    beforeEach(function(){
        magnolia = new Paint(10);
        duckegg = new Paint(5);
        parisGrey = new Paint(0);
    });

    it("should have a number of litres", function(){
        const actual = magnolia.litresOfPaint;
        assert.strictEqual(actual, 10);
    });

    it("should be able to check if empty", function(){
        magnolia.checkIfEmpty();
        const actual = magnolia.isEmpty;
        assert.strictEqual(actual, false);
     
    });

    it("should be able to check if empty", function(){
        parisGrey.checkIfEmpty();
        assert.strictEqual(parisGrey.isEmpty, true)
    });

    it("should be able to to empty itself", function(){
        magnolia.emptyCan();
        const actual = magnolia.isEmpty;
        assert.strictEqual(actual, true);
    });

});