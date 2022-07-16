"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSocket = exports.socketReducer = void 0;
var react_1 = __importDefault(require("react"));
var SocketContext = react_1.default.createContext({});
function SocketProvider(_a) {
    var providers = _a.providers, children = _a.children;
    var state = react_1.default.useReducer(socketReducer, providers)[0];
    return (react_1.default.createElement(SocketContext.Provider, { value: state }, children));
}
exports.default = SocketProvider;
function socketReducer(state) {
    return state;
}
exports.socketReducer = socketReducer;
function useSocket(namespace) {
    var sockets = react_1.default.useContext(SocketContext);
    if (Object.keys(sockets).includes(namespace)) {
        return sockets[namespace];
    }
    throw new Error("Unable to find socket with namespace " + namespace);
}
exports.useSocket = useSocket;
