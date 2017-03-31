const paper = require('paper');
module.exports = {
    status:'waiting',//waiting playing pause
    init: function() {
      //init paper & canvas
      paper.setup('myCanvas');
      paper.view.onFrame = function(event) {
        if(game.status=='playing'){
          snake.tick(event);
          paper.view.center = snake.position
        }
      }
      paper.view.onMouseDrag = function(event) {
        if(game.status=='playing'){
          var d=event.point.subtract(game.snake.position)
          sockjs.send(JSON.stringify({x:d.x,y:d.y}));
        }
      }
    },
    //event.data
    //type:event type according to which to judge the execution
    //data:parameters of the execution
    execute: function(event) {
        switch (event.type) {
            //init game data
            case 'load data':
                this.loadData(event.data);
                break;
            //game start & get the position of player
            case 'start':
                
                break;
            //move
            case 'move':

              break;
            default:

        }
    }
}
