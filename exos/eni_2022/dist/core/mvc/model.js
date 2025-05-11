"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const modelBindings_1 = require("./modelBindings");
const Model = (modelConstructor) => {
    return (target, context) => {
        context.addInitializer(function () {
            new modelConstructor();
            modelBindings_1.ModelBindings.getInstance().bind(this.constructor.name, context.name.toString(), modelConstructor.name);
            const executeWithModel = (req) => {
                const model = new modelConstructor();
                if (typeof req.body === 'object') {
                    Object.assign(model, req.body);
                }
                return target.call(this, model);
            };
            this[context.name] = executeWithModel;
        });
    };
};
exports.Model = Model;
//# sourceMappingURL=model.js.map