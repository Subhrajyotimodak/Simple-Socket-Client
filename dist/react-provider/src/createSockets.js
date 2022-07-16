"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSockets = void 0;
const core_1 = require("core");
function createSockets(namespaces, url, params) {
    const sockets = {};
    namespaces.forEach((namespace) => {
        const _params = {
            ...params,
            namespace,
        };
        const socks = new core_1.Socket(url, _params);
        sockets[namespace] = socks;
    });
    return Object.freeze(sockets);
}
exports.createSockets = createSockets;
