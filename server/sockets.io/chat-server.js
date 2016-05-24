var io = require('socket.io')();

// var knex = require('knex')(require('../knexfile')['development']);

io.on('connection', function(socket){

  socket.on('join:room', function(data){
    console.log('joined');
    var room_name = data.room_name;
    socket.join(room_name);
    // knex('message')
    // .where({room_name: room_name})
    // .then(function(msgs){
    // socket.in(msg.room).emit('messages', msgs);
    // })
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
    // knex('message')
    // .insert({
    //   message: msg
    // }).then(function(){
    //   socket.in(msg.room).emit('message', msg);
    // })
    socket.in(msg.room).emit('message', msg);

  });

});


module.exports = io;
