"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.Get = void 0;
const routeCollection_1 = require("./routeCollection");
const action = (httpVerb) => {
    return (target, context) => {
        context.addInitializer(function () {
            routeCollection_1.RouteCollection.getInstance().add({
                controller: this.constructor.name,
                action: context.name.toString(),
                httpVerb
            });
        });
    };
};
exports.Get = action("get");
exports.Post = action("post");
//# sourceMappingURL=action.js.map