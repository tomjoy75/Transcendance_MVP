const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	res.writeHead(200, {
		"content-type":'text/html'
	})
	res.end("<h1>Hello Thomas</h1>\n");
});

server.listen(3000, () => {
	console.log('Server running at http://localhost:3000/');
});