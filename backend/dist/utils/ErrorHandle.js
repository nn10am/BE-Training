"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandle = void 0;
class ErrorHandle {
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
exports.ErrorHandle = ErrorHandle;
//# sourceMappingURL=ErrorHandle.js.map