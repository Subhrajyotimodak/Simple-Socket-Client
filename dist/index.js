"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.reactProvider = exports.core = void 0;
const Socket_1 = __importDefault(require("./core/Socket"));
const createSockets_1 = require("./react-provider/createSockets");
const SocketProvider_1 = __importStar(require("./react-provider/SocketProvider"));
const error_1 = __importStar(require("./utils/error"));
const core = { Socket: Socket_1.default };
exports.core = core;
const reactProvider = { SocketProvider: SocketProvider_1.default, useSocket: SocketProvider_1.useSocket, createSockets: createSockets_1.createSockets };
exports.reactProvider = reactProvider;
const utils = { SocketError: error_1.default, isSocketError: error_1.isSocketError };
exports.utils = utils;
