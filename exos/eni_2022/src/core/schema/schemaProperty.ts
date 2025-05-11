/**
 * @file schemaProperty.ts
 * Contient le décorateur `@SchemaProperty`, qui permet d’enregistrer automatiquement
 * une propriété de classe dans un schéma JSON de validation.
 * Ce décorateur utilise `SchemaCollection` pour centraliser les définitions de schéma.
 */
import { SchemaCollection } from "./schemaCollection"; 
import type { SchemaPropertyOptions } from "./types";

/**
 * Décorateur `@SchemaProperty`.
 * Permet de lier une propriété de classe à une définition de schéma JSON pour la validation.
 * Enregistre dynamiquement la propriété dans la `SchemaCollection`.
 * @param options - Les options de validation associées à cette propriété.
 */
export const SchemaProperty = <TModel extends Object>(
	options: SchemaPropertyOptions
) => {
	return (
		target: undefined,
		context : ClassFieldDecoratorContext<TModel>
	) => {
		context.addInitializer(function () {
			SchemaCollection.getInstance().add(
				this.constructor.name,
				context.name.toString(),
				options
			);
		});
	}
};