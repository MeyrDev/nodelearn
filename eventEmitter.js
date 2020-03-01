const eventEmmitter = require('events').EventEmitter;
let counter = 0;

let em = new eventEmmitter()

setInterval(function(){
    em.emit('timed', counter++)
}, 2000)

em.on('timed', function(data){
    console.log('timed', data)
})