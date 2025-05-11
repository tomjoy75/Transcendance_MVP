import { Server } from "./core/server";

// IIFE : declare a function and execute it immediately
(async () => {
	const server = new Server();
	await server.start();
})();