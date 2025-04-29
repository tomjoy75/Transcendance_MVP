const http = require('http');

// const server = http.createServer((req, res) => {
// 	console.log('got a request');
// 	res.end();
// });

const server = http.createServer();

server.on('request', (req, res) => {
	console.log('got a request'); // Fonction de callback pour lire la requete et ecrire la reponse
	res.end();
})

server.listen(8081);