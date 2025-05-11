/**
 * @file modelBindings.ts
 * Gère les liaisons entre les actions (méthodes de contrôleurs) et les modèles associés.
 * Utilisé par le décorateur `@Model` pour enregistrer les relations, et par le serveur pour injecter les schémas.
 */

import { get } from "http";

/**
 * Classe `ModelBindings`.
 * Singleton utilisé pour enregistrer la correspondance entre une méthode de contrôleur
 * et un modèle de validation.
 */
export class ModelBindings {
	static #instance: ModelBindings;

	#bindings: Map<`${string}#${string}`, string>;

	private constructor(){
		this.#bindings = new Map();
	}

	static getInstance(): ModelBindings{
		if (!this.#instance) {
			this.#instance = new ModelBindings ();
		}
		return this.#instance;
	}

	/**
	 * Méthode `bind`.
	 * Enregistre l’association entre un contrôleur, une action (méthode), et un constructeur de modèle.
	 * Utilisée par le décorateur `@Model` pour préparer l'injection du schéma au moment du montage de la route.
	 * @param controller - Nom du contrôleur (ex: "UserController").
	 * @param action - Nom de la méthode décorée (ex: "create").
	 * @param modelConstructor - Classe du modèle servant à valider les données.
	 */
	bind(
		controllerName: string,
		actionName: string,
		modelName: string
	){
		this.#bindings.set(`${controllerName}#${actionName}`,modelName);
	}

	/**
	 * Méthode `get`.
	 * Retourne le constructeur de modèle associé à un couple contrôleur + action.
	 * @param controller - Nom du contrôleur.
	 * @param action - Nom de l'action.
	 */
	get(controllerName: string, actionName: string){
		return this.#bindings.get(`${controllerName}#${actionName}`);
	}
}
