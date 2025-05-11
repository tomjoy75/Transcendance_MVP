"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./core/server");
// IIFE : declare a function and execute it immediately
(async () => {
    const server = new server_1.Server();
    await server.start();
})();
//# sourceMappingURL=index.js.map