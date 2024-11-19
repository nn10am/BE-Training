"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoURI = 'mongodb://localhost:27017/pdnn-db';
// Establish connection to database
const dbConnect = async () => {
    try {
        await mongoose_1.default.connect(mongoURI);
        console.log('Successfully connected to database');
    }
    catch (error) {
        console.log('Error connecting to database:', error);
    }
};
exports.default = dbConnect;
//# sourceMappingURL=Database.connect.js.map