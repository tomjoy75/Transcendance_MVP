/**
 * @file createEmployeeModel.ts
 * Décrit les propriétés attendues pour créer un employé.
 * Utilisé avec le décorateur `@SchemaProperty` pour générer dynamiquement un schéma de validation JSON.
 */
import { SchemaProperty } from "../core/schema/schemaProperty";

/**
 * Classe `CreateEmployeeModel`.
 * Modèle de données utilisé pour valider la création d’un nouvel employé.
 * Chaque propriété est décorée pour alimenter dynamiquement le schéma JSON.
 */
export class CreateEmployeeModel {
	@SchemaProperty({
		description: `Employee's first name`,
		type: "string"
	})
	firstName!: string;

	@SchemaProperty({
		description: `Employee's last name`,
		type: "string"
	})
	lastName!: string;

	@SchemaProperty({
		description: `Employee's email`,
		type: "string",
		pattern: "^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$"
	})
	email!:string;

	@SchemaProperty({
		description: `Employee's salary`,
		type: "integer",
		minimum: 0
	})
	salary!: number;
}