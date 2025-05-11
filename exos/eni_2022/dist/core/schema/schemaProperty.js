"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaProperty = void 0;
const schemaCollection_1 = require("./schemaCollection");
const SchemaProperty = (options) => {
    return (target, context) => {
        context.addInitializer(function () {
            schemaCollection_1.SchemaCollection.getInstance().add(this.constructor.name, context.name.toString(), options);
        });
    };
};
exports.SchemaProperty = SchemaProperty;
//# sourceMappingURL=schemaProperty.js.map