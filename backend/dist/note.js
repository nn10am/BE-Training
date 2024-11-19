"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.loginUser = void 0;
// 2 example users
// Define the model for the account collection
const { Schema, model } = mongoose_1.default;
const account = model('account', accountSchema);
module.exports = account;
const UserStatus_enum_1 = require("./model/UserStatus.enum");
// Create example instances: 2 users
const user1 = new account({
    username: 'Jisoo',
    email: 'Jisoo@gmail.com',
    address: '123 5th Avenue',
    password: 'pass123',
    employeeCode: 'EMP01',
    status: UserStatus_enum_1.EStatus.Active,
    updatedAt: new Date()
});
const user2 = new account({
    username: 'Rose',
    email: 'Rose@gmail.com',
    address: '1 Hung Vuong',
    password: 'pass456',
    employeeCode: 'EMP02',
    status: UserStatus_enum_1.EStatus.InActive,
    updatedAt: new Date()
});
// Account.model.ts
const mongoose_1 = __importDefault(require("mongoose"));
const accountSchema = new Schema({
    username: String,
    email: String,
    address: String,
    employeeCode: String,
    password: String,
    status: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
});
const AccountModel = model('Account', accountSchema);
exports.default = AccountModel;
// Service function to authenticate user login
async function loginUser(identifier, password) {
    try {
        let user;
        // Check if the identifier is an email
        if (identifier.includes('@')) {
            user = await AccountModel.findOne({ email: identifier });
        }
        else {
            user = await AccountModel.findOne({ username: identifier });
        }
        // If no user found, return null
        if (!user) {
            return null;
        }
        // If passwords match, return the user
        if (user.password === password) {
            return user;
        }
        else {
            return null;
        }
    }
    catch (error) {
        throw new Error('Error occurred while logging in');
    }
}
exports.loginUser = loginUser;
// Controller function for handling login requests
async function login(req, res) {
    const { identifier, password } = req.body;
    try {
        const user = await loginUser(identifier, password);
        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        }
        else {
            res.status(401).json({ message: 'Incorrect username/email or password' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
exports.login = login;
//# sourceMappingURL=note.js.map