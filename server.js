var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

/* Array for our messages to iterate back to new joiners */
var MsgArray = [];

io.on('connection', function (socket)
{
  /* Iterate through the array as this is the first connection time */
  MsgArray.forEach(function(item, index, array)
  {
  	/* Log to the conole for debugging */
  	console.log('Looping through the array : ', item, index);

  	/* Send the message out */
    io.emit('InitMsg', item);
  });

  /* Receive the message */
  socket.on('InitMsg', function (InitText, MsgText) 
  {
  	/* Log the message to the server console */
  	console.log('server.js recieved : ', InitText, MsgText);

  	/* Lets build the message to store and store in the array */
  	/* Could have done this at the sending client but it maybe useful to keep the message pieces in the server*/
  	var Message = InitText;
  	Message += " says: ";
  	Message += MsgText;
  	/* Add the message to the array */
  	var newLength=MsgArray.push(Message);
  	/* Log message to console for debugging */
  	console.log('MsgArray - added : ', Message)

  	/* Send the message back out as a single message*/
    io.emit('InitMsg', Message);
  });
});

server.listen(8080, function() 
{
  console.log('Chat server running');
});