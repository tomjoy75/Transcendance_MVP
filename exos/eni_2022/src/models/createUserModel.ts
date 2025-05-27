/**
 * @file createUserModel.ts
 * Décrit les propriétés attendues pour créer un User
 * Utilisé avec le décorateur `@SchemaProperty` pour générer dynamiquement un schéma de validation JSON.
 */
import { SchemaProperty } from "../core/schema/schemaProperty";

/**
 * Classe `CreateUserModel`.
 * Modèle de données utilisé pour valider la création d’un nouvel User
 * Chaque propriété est décorée pour alimenter dynamiquement le schéma JSON.
 */
export class CreateUserModel {
	@SchemaProperty({
		description: `User's first name`,
		type: "string"
	})
	firstName!: string;

	@SchemaProperty({
		description: `User's last name`,
		type: "string"
	})
	lastName!: string;

	@SchemaProperty({
		description: `User's username`,
		type: "string"
	})
	userName!: string;

	@SchemaProperty({
		description: `User's email`,
		type: "string",
		pattern: "^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$"
	})
	email!:string;

	@SchemaProperty({
		description: `User's password`,
		type: "string"
	})
	password!: string;

}