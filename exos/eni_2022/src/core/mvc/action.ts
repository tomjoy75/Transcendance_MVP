/**
 * @file action.ts
 * Déclare les décorateurs HTTP tels que `@Get` et `@Post` pour marquer des méthodes de contrôleurs
 * comme étant des actions liées à une route HTTP.
 *
 * Chaque décorateur enregistre automatiquement la route correspondante dans la `RouteCollection`,
 * en incluant le verbe HTTP, le nom de la méthode, et le contrôleur associé.
 */

import type { HttpVerb } from "./types";
import { RouteCollection } from "./routeCollection";

const action = <TController extends Object>(
    httpVerb: HttpVerb ) => {
        return (
            target: (this: TController, ...args: any[]) => unknown,
            context: ClassMethodDecoratorContext<TController>
        ) => {
            context.addInitializer(function (){
                RouteCollection.getInstance().add({
                    controller: this.constructor.name,
                    action: context.name.toString(),
                    httpVerb
                });
            });
        };
    }

/**
 * Décorateur `@Get` pour marquer une méthode de contrôleur comme répondant à une requête HTTP GET.
 * Enregistre automatiquement la route dans la `RouteCollection`.
 */
export const Get = action("get");

/**
 * Décorateur `@Post` pour marquer une méthode de contrôleur comme répondant à une requête HTTP POST.
 * Enregistre automatiquement la route dans la `RouteCollection`.
 */
export const Post = action("post");
