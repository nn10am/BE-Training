"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserStatus_enum_1 = require("../enums/UserStatus.enum");
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
// Define the schema for the users collection
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: String,
    employeeCode: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    status: {
        type: String,
        enum: Object.values(UserStatus_enum_1.EStatus)
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
});
// Encrypt user's password using md5 hash(password + SALT)
// Pre-save hook to encrypt password with MD5 hash and random it
// @ts-ignore
// tslint:disable-next-line:only-arrow-functions
// UserSchema.pre<IUser>("save", function(error, doc, next) {
//     console.log("1235")
//     // const user = this;
//     // Generate a random salt
//     const salt = Math.random().toString(36).substring(7);
//     console.log("Before hashing: ", User.password);
//     User.password = md5(User.password + salt);
//     console.log("After hashing", User.password);
//     console.error(error);
//     next();
// });
UserSchema.pre('save', (next) => {
    const user = this;
    // user.password = md5(user.password + SALT);
    next();
});
const User = mongoose_1.default.model('user', UserSchema);
module.exports = User;
//# sourceMappingURL=User.model.js.map