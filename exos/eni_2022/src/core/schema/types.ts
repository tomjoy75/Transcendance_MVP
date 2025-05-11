/**
 * @file types.ts
 * Définit les types liés à la validation des schémas JSON.
 * Contient la structure des propriétés valides (`SchemaPropertyOptions`) et la forme globale d’un `Schema`.
 * Utilisé pour typer les schémas utilisés dans `SchemaCollection` et les décorateurs.
 */
type SchemaBaseProperty = {
	description: string;
};

type SchemaIntegerProperty = {
	type: "integer";
	minimum?: number;
};

type SchemaStringProperty = {
	type: "string";
	pattern?: string;
};

/**
 * Type `SchemaPropertyOptions`.
 * Décrit les options de validation pour une propriété JSON :
 * - type `string` (avec `pattern`)
 * - ou type `integer` (avec `minimum`)
 * Toujours accompagné d'une `description`.
 */
export type SchemaPropertyOptions = SchemaBaseProperty & (
	SchemaIntegerProperty | SchemaStringProperty
);

/**
 * Type `Schema`.
 * Représente un schéma JSON complet utilisé pour valider le corps (`body`) d'une requête HTTP.
 * Contient les propriétés, leur type et les champs requis.
 */
export type Schema = {
	body: {
		type: "object",
		properties: Record<string, SchemaPropertyOptions>,
		required: Array<string>
	},
}