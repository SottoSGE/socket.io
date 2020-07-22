var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connect', function(socket){
    //console.log('connect');
});

io.on('connection', (socket) => {
    console.log('connection: a user connected ',socket.id);
    socket.on('position', (pos) => {
        console.log('position: ' + JSON.stringify(pos));
      });
      
    socket.on('connecting', (msg) => {
        console.log('connecting: ' + msg);
      });
  });
io.on('event', function(data){
    console.log(data);
});
io.on('disconnect', function(){

});

http.listen(5020, () => {
  console.log('listening on *:5020');
});