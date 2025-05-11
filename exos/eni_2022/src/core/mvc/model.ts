/**
 * @file model.ts
 * Fournit le décorateur `@Model`, utilisé pour associer un modèle (schéma de validation) à une action de contrôleur.
 * Le lien est enregistré via `ModelBindings` et utilisé lors du montage des routes pour insérer les schémas.
 */

import type { FastifyRequest } from "fastify";
import { ModelBindings } from "./modelBindings";

/**
 * Décorateur `@Model` permettant de lier un modèle de validation à une méthode de contrôleur.
 * Utilisé pour charger dynamiquement les schémas JSON lors du montage des routes.
 * @param modelConstructor - Constructeur du modèle à associer.
 */
export const Model = <
	TController extends Object, 
	TModel extends Object
>(modelConstructor: new () => TModel) => {
	return (
		target: (this: TController, arg: TModel) => unknown,
		context: ClassMethodDecoratorContext<TController>
	) => {
		context.addInitializer(function () {
			new modelConstructor();
			ModelBindings.getInstance().bind(
				this.constructor.name,
				context.name.toString(),
				modelConstructor.name
			);

		const executeWithModel = (req: FastifyRequest) => {
			const model = new modelConstructor();

			if(typeof req.body === 'object') {
				Object.assign(model, req.body);
			}

			return target.call(this, model);
		}
		(this as any)[context.name] = executeWithModel
		});
	};
}