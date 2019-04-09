class Room {
  constructor(area, areaPainted = 0){
    this.area = area;
    this.areaPainted = areaPainted;
  }
  totLeftToPaint(){
    let volume = this.area - this.areaPainted;
    return volume;
  };
  
}

module.exports = Room;
