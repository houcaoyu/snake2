var Snake = require('../app/Snake');
const game = require('./game');

window.onload = function() {
    //init paper & canvas
    game.init();
    //init socket
    var sockjs_url = 'http://localhost:9999/echo';
    var sockjs = new SockJS(sockjs_url);
    sockjs.onopen = function() {
        console.log('[*] open', sockjs.protocol);
    };
    sockjs.onmessage = function(e) {
        game.execute(e.data)
    };
    sockjs.onclose = function() {
        console.log('[*] close');
    };

}
