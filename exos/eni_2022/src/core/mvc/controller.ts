/**
 * @file controller.ts
 * Déclare le décorateur `@Controller` pour enregistrer une classe comme contrôleur dans la ControllerFactory.
 * Ce décorateur est utilisé pour instancier automatiquement les contrôleurs à l'initialisation du serveur.
 */

import { ControllerFactory } from "./controllerFactory";

/**
 * Décorateur `@Controller` pour enregistrer automatiquement une classe comme contrôleur
 * dans la `ControllerFactory`.
 */
export const Controller = <
    TConstructor extends new (...args: unknown[]) => unknown
>(
    target: TConstructor,
    context: ClassDecoratorContext<TConstructor>
) => {
    ControllerFactory.getInstance().register(target);
};