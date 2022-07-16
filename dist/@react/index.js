"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSockets = void 0;
const SocketProvider_1 = __importDefault(require("./src/SocketProvider"));
const createSockets_1 = require("./src/createSockets");
Object.defineProperty(exports, "createSockets", { enumerable: true, get: function () { return createSockets_1.createSockets; } });
exports.default = SocketProvider_1.default;
