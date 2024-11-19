"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
// @ts-ignore
const UserStatus_enum_1 = require("./UserStatus.enum");
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// Define the schema for the users collection
const UserSchema = new Schema({
    username: String,
    email: String,
    address: String,
    employeeCode: String,
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
const User = mongoose.model('users', UserSchema);
exports.default = User;
//# sourceMappingURL=User.model.js.map