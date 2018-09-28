var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

/* Array for our messages to iterate back to new chat joiners */
var MsgArray = [];

/* Has a question been asked */
function isQuestion(msg) {
 return msg.match(/\?$/)
}

/* Is this a question about the weather */
function askingWeather(msg) {
 return msg.match(/weather/i)
}

/* Function for the wmetaweather API */
/* Needed the request module installed - 'npm install request --save' */
function getWeather(callback) {
	var request = require('request');
 
	 /* Grab the message from the API */
	 request.get("https://www.metaweather.com/api/location/4118/", function (error, response) 
	 {
	 	if (!error && response.statusCode == 200) 
	 	{
	 		var data = JSON.parse(response.body);
	 		callback(data.consolidated_weather[0].weather_state_name);
	 	}
	 })
}

/* Socket function for chat */
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
  socket.on('InitMsg', function (Message) 
  {
	  	/* Log the message to the server console */
	  	console.log('server.js recieved : ', Message);

	  	/* Add the message to the array */
	  	var newLength=MsgArray.push(Message);

	  	/* Log message to console for debugging */
	  	console.log('MsgArray - added : ', Message)

		/* Respond to a weather question */
		if (!isQuestion(Message)) 
		{
	 		io.emit('InitMsg', Message);
	 	}
		else if (askingWeather(Message)) 
		{
	 		/* Display the message anyway with note about checking  and add to array*/
	 		io.emit('InitMsg', Message)
	 		io.emit('InitMsg', '... Checking weather ...')
			var newLength=MsgArray.push('... Checking weather ...')
	 		
	 		/*Let's get the weather from the API and store in array*/
	 		getWeather(function(weather)
	 		{ 
				io.emit('InitMsg', weather)
				var newLength=MsgArray.push(weather);
			})
	 	}
 	});
});

/* Added Heroku port handling */
var port = process.env.PORT || 8080;

server.listen(port, function() {
  console.log('Listening on ' + port);
  console.log('Chat server running');
});