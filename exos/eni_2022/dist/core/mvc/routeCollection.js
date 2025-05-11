"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCollection = void 0;
// "Pattern singleton" pour avoir uniquement ine instance de la classe
class RouteCollection {
    static #instance; // Propriété privée et statique pour stocker l'instance unique
    #routes;
    get routes() {
        return this.#routes;
    }
    constructor() {
        // Constructeur privé : empêche l’instanciation directe avec `new RouteCollection()`	
        this.#routes = [];
    }
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new RouteCollection(); // On crée l'instance si elle n'existe pas
        }
        return this.#instance; // On renvoie toujours la même instance
    }
    add(route) {
        this.#routes.push({
            ...route,
            path: `/${route.controller.replace("Controller", "").toLowerCase()}`
        });
    }
    ;
}
exports.RouteCollection = RouteCollection;
//# sourceMappingURL=routeCollection.js.map