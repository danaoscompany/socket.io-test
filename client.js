const io = require('socket.io-client');

var socket = io('http://localhost:3000');
socket.on("connect", function() {
	socket.on('message', function(msg) {
		console.log(msg);
		socket.emit('message', 'Hello from client');
	});
});
socket.open();
socket.connect();
