const Room = require("./room");
const Paint = require("./paint");

const Decorator = function () {
  this.paintStock = []
};

Decorator.prototype.checkStock = function () {
  return this.paintStock;
};

Decorator.prototype.addPaint = function(Paint) {
  this.paintStock.push(Paint);
};

Decorator.prototype.calculateLitres = function() {
    let totalLitres = 0
    for (paint of this.paintStock) {
      totalLitres += paint.litresOfPaint
    }
    return totalLitres
};

Decorator.prototype.enoughPaint = function(room) {
  totalPaint = this.calculateLitres();
    if (totalPaint >= room.area) {
      return true
    } else  {
      return false
    };    

};

Decorator.prototype.paintRoom = function(room) {
    if (this.enoughPaint(room)){
      room.isPainted =true 
    };
  };    


module.exports = Decorator;