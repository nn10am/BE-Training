"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = __importDefault(require("./User.model"));
// @ts-ignore
const UserStatus_enum_1 = require("./UserStatus.enum");
// Create example instances: 2 users
const user1 = new User_model_1.default({
    username: 'Jisoo',
    email: 'Jisoo@gmail.com',
    address: '123 5th Avenue',
    employeCode: 'EMP01',
    password: 'pass123',
    status: UserStatus_enum_1.EStatus.Active,
    updatedAt: Date()
});
const user2 = new User_model_1.default({
    username: 'Rose',
    email: 'Rose@gmail.com',
    address: '1 Hung Vuong',
    employeeCode: 'EMP02',
    password: 'pass456',
    status: UserStatus_enum_1.EStatus.InActive,
    updatedAt: new Date()
});
// Method creating new user
const addUser = async (user) => {
    try {
        // Create user in database
        const createUser = await User_model_1.default.create(user);
        console.log('User added to database', createUser);
    }
    catch (error) {
        console.log(error);
    }
};
addUser(user1);
addUser(user2);
//# sourceMappingURL=User.post.js.map