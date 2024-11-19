"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(code, message) {
        this._code = code;
        this._message = message;
    }
    get code() {
        return this._code;
    }
    get message() {
        return this._message;
    }
}
exports.Response = Response;
//# sourceMappingURL=Response.js.map