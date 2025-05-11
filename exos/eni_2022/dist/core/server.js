"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const fastify_1 = __importDefault(require("fastify"));
const routeCollection_1 = require("./mvc/routeCollection");
const controllerFactory_1 = require("./mvc/controllerFactory");
const path_1 = require("path");
const promises_1 = require("fs/promises");
const schemaCollection_1 = require("./schema/schemaCollection");
const modelBindings_1 = require("./mvc/modelBindings");
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
class Server {
    #fastifyInstance;
    constructor() {
        this.#fastifyInstance = (0, fastify_1.default)();
    }
    async #initializeControllers() {
        const controllersPath = (0, path_1.join)(__dirname, "..", "controllers");
        const files = await (0, promises_1.readdir)(controllersPath, { withFileTypes: true });
        const filesToImport = files.filter((file) => file
            .name
            .endsWith(".js"))
            .map((fileName) => Promise.resolve(`${(0, path_1.join)(controllersPath, fileName.name)}`).then(s => __importStar(require(s))));
        await Promise.all(filesToImport);
    }
    #setupRouter() {
        for (const route of routeCollection_1.RouteCollection.getInstance().routes) {
            const controller = controllerFactory_1.ControllerFactory
                .getInstance()
                .get(route.controller);
            const schemaName = modelBindings_1.ModelBindings.getInstance().get(route.controller, route.action);
            const schema = schemaName
                ? schemaCollection_1.SchemaCollection.getInstance().getSchema(schemaName)
                : undefined;
            const method = controller[route.action];
            this.#fastifyInstance[route.httpVerb](route.path, {
                schema
            }, async (req, res) => {
                const result = await method.call(controller, req);
                res.send(result);
            });
        }
    }
    async #setupOpenApi() {
        await this.#fastifyInstance.register(swagger_1.default);
        await this.#fastifyInstance.register(swagger_ui_1.default, {
            routePrefix: '/documentation'
        });
    }
    async start() {
        await this.#setupOpenApi();
        await this.#initializeControllers();
        this.#setupRouter();
        try {
            await this.#fastifyInstance.listen({ port: 3000 });
        }
        catch (err) {
            this.#fastifyInstance.log.error(err);
            process.exit(1);
        }
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map