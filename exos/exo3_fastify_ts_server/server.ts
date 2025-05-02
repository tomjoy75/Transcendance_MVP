import fastify from "fastify";

const app = fastify({ logger : true });

app.get('/', async(request, reply) => {
	reply.type('text/html');
	return '<h1>Hello Thomas (TS)</h1>';
});

app.get('/hello/:name', async(request, reply) => {
	const { name } = request.params as { name: string };
	reply.type('text/html');
	return `<h1>Hello ${name} (TS)</h1>`;
	
});

app.listen({ port: 3000}, (err ,address) => {
	if (err) throw err;
	console.log(`Server listening at ${address}`);
});