var io = require('socket.io')();

io.on('connection', function(socket){

  socket.on('join:room', function(data){
    console.log('joined');
    var room_name = data.room_name;
    socket.join(room_name);
    socket.in(msg.room).emit('messages', msgs);
  });

  socket.on('leave:room', function(msg){
    console.log('left');
    msg.text = msg.user + " has left the room";
    socket.in(msg.room).emit('exit', msg);
    socket.leave(msg.room);
  });

  socket.on('send:message', function(msg){
    console.log('sent message');
    socket.in(msg.room).emit('message', msg);
  });

});

module.exports = io;
