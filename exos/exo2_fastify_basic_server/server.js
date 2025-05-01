const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
	// res.writeHead(200, {
	// 	'content-type': 'text-html'
	// });
	reply.type('text/html');
	return '<h1>Hello Thomas</h1>';
});

fastify.get('/hello/:name', async (request, reply) => {
	// res.writeHead(200, {
	// 	'content-type': 'text-html'
	// });
	reply.type('text/html');
	const  { name } = request.params;
//	console.log(name);
	return `<h1>Hello ${name}</h1>`;
});

fastify.listen({ port: 3000}, (err, address) => {
	if (err) throw err;
	console.log(`Server listening at ${address}`);
});

//https://fastify.dev/