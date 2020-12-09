const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');
const Room = require('../room');


describe('Decorator', function(){ 
    let decorator;
    let magnolia;
    let duckegg;
    let kitchen;

    beforeEach(function(){
        decorator = new Decorator();
        magnolia = new Paint(10);
        duckegg = new Paint(5);
        kitchen = new Room(15)
    });

    it("should start with empty stock", function(){
    
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });

    it("should be able to add paint to stock", function(){
        decorator.addPaint(magnolia);
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [magnolia]);
    });

    it("should be able to calculate the litres of paint", function (){
        decorator.addPaint(magnolia);
        decorator.addPaint(duckegg);
        const actual = decorator.calculateLitres();
        assert.strictEqual(actual, 15);
    });


    it("should be able to calculate if enough paint", function(){
        decorator.addPaint(magnolia);
        decorator.addPaint(duckegg);
        const actual = decorator.enoughPaint(kitchen);
        assert.strictEqual(actual, true);
    });



    it("should be able to paint room if has enough paint", function(){
        decorator.addPaint(magnolia);
        decorator.addPaint(duckegg);
        decorator.paintRoom(kitchen);
        const actual = kitchen.isPainted
        assert.strictEqual(actual, true);
    });

});

