"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSocketError = void 0;
class SocketError extends Error {
    type;
    code;
    name;
    stack;
    message;
    constructor(code, name, message) {
        super();
        this.type = "other";
        this.code = code;
        this.name = name;
        this.message = message;
        this.stack = super.stack;
    }
    static checkError(response) {
        if (response.code >= 200 && response.code <= 299) {
            return null;
        }
        const error = new SocketError(response.code, response.status, response.message);
        if (response.code >= 400 && response.code <= 499) {
            error.type = "client";
            return error;
        }
        if (response.code >= 500 && response.code <= 599) {
            error.type = "server";
            return error;
        }
        error.type = "other";
        return error;
    }
    isSocketError() {
        return !!this?.["type"];
    }
}
exports.default = SocketError;
function isSocketError(error) {
    return !!error && error?.isSocketError && error?.isSocketError?.();
}
exports.isSocketError = isSocketError;
