"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSockets = void 0;
var Socket_1 = __importDefault(require("../core/Socket"));
function createSockets(namespaces, url, params) {
    var sockets = {};
    namespaces.forEach(function (namespace) {
        var _params = __assign(__assign({}, params), { namespace: namespace });
        var socks = new Socket_1.default(url, _params);
        sockets[namespace] = socks;
    });
    return Object.freeze(sockets);
}
exports.createSockets = createSockets;
