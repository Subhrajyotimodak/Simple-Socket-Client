"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSocket = exports.socketReducer = void 0;
const react_1 = __importDefault(require("react"));
const SocketContext = react_1.default.createContext({});
function SocketProvider({ providers, children, x }) {
    const [state] = react_1.default.useReducer(socketReducer, providers);
    return (<SocketContext.Provider value={state}>{children}</SocketContext.Provider>);
}
exports.default = SocketProvider;
function socketReducer(state) {
    return state;
}
exports.socketReducer = socketReducer;
function useSocket(namespace) {
    const sockets = react_1.default.useContext(SocketContext);
    if (Object.keys(sockets).includes(namespace)) {
        return sockets[namespace];
    }
    throw new Error("Unable to find socket with namespace " + namespace);
}
exports.useSocket = useSocket;
