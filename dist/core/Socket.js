"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = __importDefault(require("../utils/error"));
var Socket = /** @class */ (function () {
    function Socket(url, params) {
        this.connected = false;
        var urlParams = "";
        Object.keys(params).forEach(function (key) {
            var data = params[key];
            if (data) {
                urlParams += "&".concat(key, "=").concat(data);
            }
        });
        var _url = "".concat(url, "?").concat(urlParams);
        this.websocket = new WebSocket(_url);
        this.connect();
    }
    Socket.prototype.connect = function () {
        var _this = this;
        this.websocket.onopen = function () {
            _this.connected = true;
        };
    };
    Socket.prototype.disconnect = function () {
        this.websocket.close();
        this.connected = false;
    };
    Socket.prototype.send = function (data) {
        var request = JSON.stringify(data);
        if (this.connected) {
            this.websocket.send(request);
            return true;
        }
        return false;
    };
    Socket.prototype.recieve = function (onSuccess, onError) {
        var _this = this;
        if (this.connected) {
            this.websocket.onmessage = function (ev) {
                var __data__ = ev.data;
                if (typeof __data__ === "string") {
                    __data__ = JSON.parse(__data__);
                }
                var __error__ = error_1.default.checkError(__data__);
                if (__error__) {
                    onError === null || onError === void 0 ? void 0 : onError(__error__);
                    _this.connect();
                    return;
                }
                onSuccess(__data__.data);
            };
        }
        return false;
    };
    return Socket;
}());
exports.default = Socket;
