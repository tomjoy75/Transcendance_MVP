const http = require('http');

// Formule simple
// const server = http.createServer((req, res) => {
// 	console.log('got a request');
// 	res.end();
// });

const server = http.createServer();

server.on('request', (req, res) => {
//	console.log(req);
//	console.log('got a request'); // Fonction de callback pour lire la requete et ecrire la reponse
	res.writeHead(200, {
		'content-type':'text/plain'
	})
	res.end('got a response');
});

server.listen(8080);