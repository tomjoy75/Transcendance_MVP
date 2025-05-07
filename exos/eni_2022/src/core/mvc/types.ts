export type HttpVerb = "get";

export interface IRoute {
	controller: string;
	action: string;
	httpVerb: HttpVerb;
	path: string;
}

