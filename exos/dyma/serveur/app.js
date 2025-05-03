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
//		'content-type':'text/html'
		'content-type':'application/json'

	})
	const obj = {
		key1:'value1',
		key2:'value2'
	}
	// res.end(`
	// 	<html>	
	// 		<head>
	// 			<title>Mon Premier Site Node</title>
	// 		</head>
	// 		<body>
	// 			<h1>Hello World</h1>
	// 		</body>
	// 	</html>
	// `);
	res.end(JSON.stringify(obj));
});

server.listen(8081);