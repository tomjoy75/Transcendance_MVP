const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {

	const url = req.url;
	console.log(url);
	let fileContent;
	if (url === '/home'){
		res.writeHead(200, {
			'content-type':'text/html'
		})
		fileContent = fs.readFileSync('./index2.html', 'utf8');
	} else if (url === '/info'){
		res.writeHead(200, {
			'content-type':'text/html'
		})
		fileContent = fs.readFileSync('./info.html', 'utf8');
	} else {
		res.writeHead(404, {
			'content-type':'text/html'
		})
		fileContent = fs.readFileSync('./not_found.html', 'utf8');

	}
	res.end(fileContent);
});

server.listen(8080);