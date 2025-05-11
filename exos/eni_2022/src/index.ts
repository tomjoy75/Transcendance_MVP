/**
 * @file index.ts
 * Point d’entrée principal de l’application.
 * Configure l’injection de dépendances, instancie et démarre le serveur.
 */
import { Server } from "./core/server";

// IIFE : declare a function and execute it immediately
(async () => {
	const server = new Server();
	await server.start();
})();