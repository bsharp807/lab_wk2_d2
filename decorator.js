class Decorator {
  constructor(paintStock = []){
    this.paintStock = paintStock;
  }
  checkPaintStock(){
    return this.paintStock.length;
  };
  addPaintToStock(paint){
    this.paintStock.push(paint);
  };
  checkPaintVol(){
    let total = 0;
    // for (var i = 0; i < this.paintStock.length; i++) {
    //   total += this.paintStock[i].volume;
    // }
    for(let paint of this.paintStock){
        total += paint.volume;
    };
    return total;
  };

  paintRoom(room){
    // confirm that he has enough paint
    let totalStock = this.checkPaintVol();
    if (totalStock >= room.totLeftToPaint()){
      // add total decorator volume to room's area painted
      room.areaPainted = room.totLeftToPaint();
      // reduce paint cans to zero
      for (var i = 0; i < this.paintStock.length; i++) {
        this.paintStock[i].emptySelf();
      };
    }
  }

  removeEmpties(){
    let noEmpty = this.paintStock.filter(paint => paint.volume > 0);
    this.paintStock = noEmpty;
  };
}

module.exports = Decorator;
