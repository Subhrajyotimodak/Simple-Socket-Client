"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class Socket {
    websocket;
    connected = false;
    constructor(url, params) {
        const urlParams = new URLSearchParams();
        Object.keys(params).forEach((key) => {
            const data = params[key];
            if (data) {
                urlParams.set(key, data);
            }
        });
        const _url = `${url}?${urlParams.toString()}`;
        this.websocket = new WebSocket(_url);
        this.connect();
    }
    connect() {
        this.websocket.onopen = () => {
            this.connected = true;
        };
    }
    disconnect() {
        this.websocket.close();
        this.connected = false;
    }
    send(namespace, data) {
        const __data__ = {
            namespace,
            data,
        };
        const request = JSON.stringify(__data__);
        if (this.connected) {
            this.websocket.send(request);
            return true;
        }
        return false;
    }
    recieve(namespace, onSuccess, onError) {
        if (this.connected) {
            this.websocket.onmessage = (ev) => {
                let __data__ = ev.data;
                if (typeof __data__ === "string") {
                    __data__ = JSON.parse(__data__);
                }
                const __error__ = utils_1.SocketError.checkError(__data__);
                if (__error__) {
                    onError?.(__error__);
                    return;
                }
                if (__data__["namespace"] === namespace)
                    onSuccess(__data__.data);
            };
        }
        return false;
    }
}
exports.default = Socket;
