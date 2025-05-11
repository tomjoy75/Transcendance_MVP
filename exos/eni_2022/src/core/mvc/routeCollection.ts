/**
 * @file routeCollection.ts
 * Implémente un singleton `RouteCollection` qui centralise les définitions de routes HTTP.
 * Chaque route correspond à une méthode d’un contrôleur, avec son verbe HTTP et son chemin.
 * Utilisé par le serveur pour monter automatiquement les routes dans Fastify.
 */
import type { IRoute } from "./types";

// "Pattern singleton" pour avoir uniquement ine instance de la classe

/**
 * Classe `RouteCollection`.
 * Singleton utilisé pour stocker l’ensemble des routes de l’application,
 * en associant un contrôleur, une action, un verbe HTTP, et un chemin.
 */
export class RouteCollection {
	static #instance: RouteCollection;  // Propriété privée et statique pour stocker l'instance unique

	#routes: IRoute[];

	get routes(){
		return this.#routes;
	}

	private constructor(){
		// Constructeur privé : empêche l’instanciation directe avec `new RouteCollection()`	
		this.#routes = [];
	}

	static getInstance(): RouteCollection {
		if (!this.#instance){
			this.#instance = new RouteCollection(); // On crée l'instance si elle n'existe pas
		}
		return this.#instance; // On renvoie toujours la même instance
	}

	/**
	 * Méthode `add`.
	 * Ajoute une nouvelle route à la collection avec un nom de contrôleur, une action,
	 * un verbe HTTP et une construction automatique de chemin.
	 * @param route - Objet de type `IRoute` décrivant la route.
	 */
	add(route: Omit<IRoute, "path">){
		this.#routes.push({
			...route,
			path: `/${
				route.controller.replace("Controller", "").toLowerCase()
			}`
		});
	};
}


