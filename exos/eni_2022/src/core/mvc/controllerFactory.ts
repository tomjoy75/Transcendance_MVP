/**
 * @file controllerFactory.ts
 * Implémente un singleton `ControllerFactory` qui gère les instances des contrôleurs de l’application.
 * Fournit des méthodes pour enregistrer et récupérer dynamiquement des contrôleurs.
 */

/**
 * Classe `ControllerFactory`.
 * Singleton responsable de l'enregistrement et de la récupération des instances de contrôleurs.
 */
export class ControllerFactory{
    static #instance: ControllerFactory;

    readonly #controllers: Map<string, unknown> = new Map();

    static getInstance(): ControllerFactory {
        if (!this.#instance) {
            this.#instance = new ControllerFactory ();
        }
        return this.#instance;
    }
    
	/**
	 * Méthode `register`.
	 * Enregistre une instance de contrôleur en l'associant à son nom de classe.
	 * @param controller - La fonction constructeur de la classe contrôleur.
	 */
    register(ctor: new () => unknown) {
        this.#controllers.set(ctor.name, new ctor());
    }

    private constructor(){

    }

	/**
	 * Méthode `get`.
	 * Retourne une instance de contrôleur précédemment enregistrée.
	 * @param name - Nom de la classe contrôleur.
	 */
	get(controllerName: string) {
	const controller = this.#controllers.get(controllerName);
	if (!controller)
		throw new Error(`Unknown controller: ${controllerName}`);
	return controller;
    }
}