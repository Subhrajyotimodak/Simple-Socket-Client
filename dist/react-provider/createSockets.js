"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSockets = void 0;
const Socket_1 = __importDefault(require("../core/Socket"));
function createSockets(namespaces, url, params) {
    const sockets = {};
    namespaces.forEach((namespace) => {
        const _params = {
            ...params,
            namespace,
        };
        const socks = new Socket_1.default(url, _params);
        sockets[namespace] = socks;
    });
    return Object.freeze(sockets);
}
exports.createSockets = createSockets;
