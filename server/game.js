var paper = require('paper')
const Snake = require('../app/Snake');

function Game() {

}
Game.prototype.init = function() {
  this.snake = new Snake()
  this.conns=[]
  this.running = true;
  this.last = null;
  this.delta=0;
  this.time = 0;
  this.count = 0;
  this.fps = 60;
  this.spf = 1.0 / 60

  var self=this
  setImmediate(this.loop,self)
};
Game.prototype.loop = function (self) {
  if (self.running) {
      var now = Date.now() / 1000;
      self.delta = self.last ? now - self.last : 0;
      self.last = now;
      if (self.delta > 0) {
        var event = {
            delta: self.delta,
            time: self.time += self.delta,
            count: self.count++
        }
        self.snake.tick(event)
      }
  }
  setImmediate(self.loop,self)
};
Game.prototype.execute = function (conn,message) {
    
};


module.exports = Game
