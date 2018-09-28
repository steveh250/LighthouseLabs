var socket = io();

/* SEND - This section captures the message from the form and sends it to the server*/
$('form').submit(function () 
{
  var InitText = $('#initials').val();
  var MsgText = $('#message').val();

  /* Build the Message from the parts and send to server*/
  var Message = InitText;
    Message += " says: ";
    Message += MsgText;
  socket.emit('InitMsg', Message);

  /* Clear out the variables */
  $('#initials').val('');
  $('#message').val('');
  return false;
});

/* RECEIVE - This section receives a message from the server and displays it on the web page - hence the <li> */
/* Message is recieved back as a single string to leave the parts in the server in case they need processing */
/* Don't need to receive the message in parts as it's only for display */
socket.on('InitMsg', function (Message) 
{
    /* Lets write the line to the screen */
  $('<li>').text(Message).appendTo('#history');
});