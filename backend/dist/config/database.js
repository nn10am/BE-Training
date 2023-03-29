"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var dbState = [{
        value: 0,
        label: "disconnected"
    },
    {
        value: 1,
        label: "connected"
    },
    {
        value: 2,
        label: "connecting"
    },
    {
        value: 3,
        label: "disconnecting"
    }];
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const options = {
        //     user: process.env.DB_USER,
        //     pass: process.env.DB_PASSWORD,
        //     dbName: process.env.DB_NAME
        // };
        yield mongoose_1.default.connect(process.env.DB_HOST);
        const state = Number(mongoose_1.default.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
    }
    catch (error) {
        console.log('Error of connection', error);
    }
});
exports.connection = connection;
module.exports = { connection: exports.connection };
//# sourceMappingURL=database.js.map