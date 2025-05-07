import type { HttpVerb } from "./types";
import { RouteCollection } from "./routeCollection";

const action = <TController extends Object>(
    httpVerb: HttpVerb ) => {
        return (
            target: (this: TController, ...args: any[]) => unknown,
            context: ClassMethodDecoratorContext<TController>
        ) => {

        };
    }
