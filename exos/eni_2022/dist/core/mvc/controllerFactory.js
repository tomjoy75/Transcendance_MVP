"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerFactory = void 0;
class ControllerFactory {
    static #instance;
    #controllers = new Map();
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new ControllerFactory();
        }
        return this.#instance;
    }
    register(ctor) {
        this.#controllers.set(ctor.name, new ctor());
    }
    constructor() {
    }
    get(controllerName) {
        const controller = this.#controllers.get(controllerName);
        if (!controller)
            throw new Error(`Unknown controller: ${controllerName}`);
        return controller;
    }
}
exports.ControllerFactory = ControllerFactory;
//# sourceMappingURL=controllerFactory.js.map