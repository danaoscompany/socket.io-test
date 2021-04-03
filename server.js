var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

io.on('connection', function(socket) {
   console.log('A user connected');
   socket.on('message', function(message) {
   		console.log(message);
   });
   socket.emit('message', 'Hello from server');
});

/*io.on('message', function(message) {
	console.log(message);
});*/

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});
