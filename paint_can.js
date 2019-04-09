class PaintCan {
  constructor(volume){
    this.volume = volume;
  }
  emptySelf(){
    this.volume = 0;
  };
  checkEmpty(){
    if(this.volume === 0){
      return true
    } false
  };
  
}

module.exports = PaintCan;
