import type { IRoute } from "./types";

// "Pattern singleton" pour avoir uniquement ine instance de la classe
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

	add(route: Omit<IRoute, "path">){
		this.#routes.push({
			...route,
			path: `/${
				route.controller.replace("Controller", "").toLowerCase()
			}`
		});
	};
}


