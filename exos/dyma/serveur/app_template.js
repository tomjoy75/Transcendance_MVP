const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
	res.writeHead(200, {
		'content-type':'text/html'
	})
	const fileContent = fs.readFileSync('./index.html', 'utf8');
	const template = fileContent.replace('{name}', 'Quentin'); 
	res.end(template);
});

server.listen(8080);