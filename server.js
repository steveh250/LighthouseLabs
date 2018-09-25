var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

io.on('connection', function (socket)
{
	/* Receive the message */
  socket.on('InitMsg', function (InitText, MsgText) 
  {
  	/* Log the message to the server console */
  	console.log('server.js recieved : ', InitText, MsgText);

  	/* Send the message back out */
    io.emit('InitMsg', InitText, MsgText);
  });
});

server.listen(8080, function() 
{
  console.log('Chat server running');
});