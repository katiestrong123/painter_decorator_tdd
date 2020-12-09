const Paint = function (litresOfPaint, isEmpty=false) {
    this.litresOfPaint = litresOfPaint;
    this.isEmpty = isEmpty;
};

Paint.prototype.checkIfEmpty = function () {
    if (this.litresOfPaint === 0)
    this.isEmpty = true;
};

Paint.prototype.emptyCan = function () {
    this.isEmpty = true;
};

module.exports = Paint;