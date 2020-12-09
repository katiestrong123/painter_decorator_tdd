const assert = require("assert");
const Room = require("../room");

describe("Room", function (){
    let kitchen;

    beforeEach(function(){
        kitchen = new Room(15);
    });

    it("should have an area", function(){
        const actual = kitchen.area;
        assert.strictEqual(actual, 15);

    });

    it("should start off not painted", function(){
        const actual = kitchen.isPainted;
        assert.strictEqual(actual, false);
    });


    it("should be able to be painted", function(){
        kitchen.paintRoom();
        const actual = kitchen.isPainted;
        assert.strictEqual(actual, true);
    });
    
});