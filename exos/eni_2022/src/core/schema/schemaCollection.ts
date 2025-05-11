/**
 * @file schemaCollection.ts
 * Définit le singleton `SchemaCollection` utilisé pour enregistrer dynamiquement
 * les schémas JSON associés aux différents modèles de données.
 * Chaque schéma regroupe les propriétés validées par les décorateurs `@SchemaProperty`.
 */
import type { Schema, SchemaPropertyOptions } from "./types";

/**
 * Classe `SchemaCollection`.
 * Singleton responsable de stocker les schémas JSON liés aux différentes routes.
 * Utilisé pour associer un nom de schéma à une structure de validation JSON Schema.
 */
export class SchemaCollection {
	static #instance: SchemaCollection;

	#schemas: Map<string, Schema> = new Map();

	private constructor() {

	}

	static getInstance(): SchemaCollection{
		if (!this.#instance) {
			this.#instance = new SchemaCollection();
		}
		return this.#instance;
	}

	/**
	 * Méthode `add`.
	 * Ajoute une propriété à un schéma identifié par son nom.
	 * @param schemaName - Nom du schéma à compléter ou créer.
	 * @param propertyName - Clé de propriété à ajouter dans le schéma.
	 * @param options - Options de validation pour cette propriété.
	 */
	add(
		schemaName: string,
		propertyName: string,
		options: SchemaPropertyOptions
	) {
		const schema = this.#schemas.get(schemaName) || {
			body: {
				type: "object",
				properties: {},
				required: []
			},
		} satisfies Schema;
		schema.body.properties[propertyName] = options;
		schema.body.required.push(propertyName);

		this.#schemas.set(schemaName, schema);
	}

	/**
	 * Méthode `get`.
	 * Récupère un schéma complet par son nom.
	 * @param schemaName - Nom du schéma recherché.
	 * @returns Le schéma ou `undefined` s’il n’existe pas.
	 */
	getSchema(schemaName: string){
		return this.#schemas.get(schemaName);
	}

}