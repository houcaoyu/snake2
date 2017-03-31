const page = require('page');
function Egg(symbol) {
  this.radius = 5;
  this.energy = 1;
  this.active = true; //标志是否还活着
  this.position=new page.Point(0,0)
  if(symbol){
    this.item=symbol.place(this.position)
  }else{
    this.item=new page.Path.Circle(this.position,this.radius);
    this.item.fillColor='DeepSkyBlue'
  }
  this.setActive=function(active){
    this.active=active;
    this.item.visible=active;
  }
}
module.exports = Egg;
