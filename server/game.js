var paper = require('paper')
const Snake = require('../app/Snake');

//init paper
paper.setup();
console.log('============')
module.exports = {
    init: function() {
        var snake = new Snake()
        //console.log(paper.view)
        var running=true;
        var last=null
        var delta;
        var time=0,count=0;
        var fps=60;
        var spf=1.0/60

        var p=0;
        return ;

        while(running){
          var now = Date.now() / 1000,
          delta = last ? now - last : 0;
          last = now;
          if(delta==0){
            continue;
          }
          var event={
            delta: delta,
            time: time += delta,
            count: count++
          }

          snake.tick(event)
          if (Math.floor(time)-p>=1) {
              p=Math.floor(time)
          }
        }

    }
}
