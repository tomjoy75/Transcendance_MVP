"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCollection = void 0;
class SchemaCollection {
    static #instance;
    #schemas = new Map();
    constructor() {
    }
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new SchemaCollection();
        }
        return this.#instance;
    }
    add(schemaName, propertyName, options) {
        const schema = this.#schemas.get(schemaName) || {
            body: {
                type: "object",
                properties: {},
                required: []
            },
        };
        schema.body.properties[propertyName] = options;
        schema.body.required.push(propertyName);
        this.#schemas.set(schemaName, schema);
    }
    getSchema(schemaName) {
        return this.#schemas.get(schemaName);
    }
}
exports.SchemaCollection = SchemaCollection;
//# sourceMappingURL=schemaCollection.js.map