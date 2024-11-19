import {EStatus} from "../enums/UserStatus.enum";
import md5 from "md5";
import mongoose from 'mongoose';
import {SALT} from "../constants/Auth.constant";
import {IUser} from "../interfaces/User.interface";

const { Schema } = mongoose;

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
        enum: Object.values(EStatus)
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
})
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
    const user:IUser = this;
    // user.password = md5(user.password + SALT);
    next();
})
const User = mongoose.model('user', UserSchema);
export default User;





