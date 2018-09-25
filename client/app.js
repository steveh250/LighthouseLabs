var socket = io();

/* SEND - This section captures the message from the form and sends it to the server*/
$('form').submit(function () 
{
  var InitText = $('#initials').val();
  var MsgText = $('#message').val();

  /* Send the message */
  socket.emit('InitMsg', InitText, MsgText);

  /* Clear out the variables */
  $('#initials').val('');
  $('#message').val('');
  return false;
});

/* RECEIVE - This section receives a message from the server and displays it on the web page - hence the <li> */
socket.on('InitMsg', function (InitText, MsgText) 
{
  /* Lets build the message */
  var Message = InitText;
  Message += " says: ";
  Message += MsgText;

  /* Lets write the line to the screen */
  $('<li>').text(Message).appendTo('#history');
});