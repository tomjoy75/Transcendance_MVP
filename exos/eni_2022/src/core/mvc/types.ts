/**
 * @file types.ts
 * Contient les types et interfaces de base utilisés dans le système de routage et de validation :
 * - `IRoute` : définit une route HTTP avec son verbe, son contrôleur, son action et son chemin.
 * - `HttpVerb` : type restreint représentant les méthodes HTTP valides (GET, POST, etc.).
 */

/**
 * Type `HttpVerb`.
 * Liste des verbes HTTP pris en charge (GET, POST, etc.).
 */
export type HttpVerb = "get" | "post";

/**
 * Interface `IRoute`.
 * Représente une route HTTP dans l’application : méthode, contrôleur, action et chemin.
 */
export interface IRoute {
	controller: string;
	action: string;
	httpVerb: HttpVerb;
	path: string;
}

