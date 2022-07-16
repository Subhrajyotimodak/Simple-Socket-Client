"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSocketError = void 0;
var SocketError = /** @class */ (function (_super) {
    __extends(SocketError, _super);
    function SocketError(code, name, message) {
        var _this = _super.call(this) || this;
        _this.type = "other";
        _this.code = code;
        _this.name = name;
        _this.message = message;
        return _this;
        // this.stack = super.stack;
    }
    SocketError.checkError = function (response) {
        if (response.code >= 200 && response.code <= 299) {
            return null;
        }
        var error = new SocketError(response.code, response.status, response.message);
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
    };
    SocketError.prototype.isSocketError = function () {
        return !!(this === null || this === void 0 ? void 0 : this["type"]);
    };
    return SocketError;
}(Error));
exports.default = SocketError;
function isSocketError(error) {
    var _a;
    return !!error && (error === null || error === void 0 ? void 0 : error.isSocketError) && ((_a = error === null || error === void 0 ? void 0 : error.isSocketError) === null || _a === void 0 ? void 0 : _a.call(error));
}
exports.isSocketError = isSocketError;
