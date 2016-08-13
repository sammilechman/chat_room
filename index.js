var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function () {
  console.log('Chat room app up and running!');
});
