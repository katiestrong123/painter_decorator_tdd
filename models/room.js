const Room = function (area, isPainted=false) {
    this.area = area;
    this.isPainted = isPainted;
};

Room.prototype.paintRoom = function () {
    this.isPainted = true;
};

module.exports = Room;