"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AccountStatus_enums_1 = require("./model/AccountStatus.enums");
// Define MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/pdnn-db';
// Define Schema and Model for a document of users
const accountSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    email: String,
    address: String,
    employeeCode: String,
    password: {
        type: String,
        required: true
    },
    status: { type: String, enum: Object.values(AccountStatus_enums_1.accountStatus) },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
});
const accountModel = mongoose_1.default.model('accounts', accountSchema);
// Connect to database and post user information
mongoose_1.default.connect(mongoURI)
    .then(async () => {
    console.log('Successfully connected to database');
    // Create an instance of the document, save it to create collection
    await accountModel.create({
        username: 'Jisoo',
        email: 'Jisoo@gmail.com',
        address: '123 5th Avenue',
        password: 'pass123',
        employeeCode: 'EMP01',
        status: AccountStatus_enums_1.accountStatus.ACTIVE,
        updatedAt: new Date()
    });
    console.log('User created successfully');
})
    .catch((error) => {
    console.log('Error connecting to database: ', error);
});
// Check username and password when logging in
async function loginUser(identifier, password) {
    try {
        let user = {};
        // Check if identifier contains '@' symbol
        // TODO using with regex
        if (identifier.includes('@')) {
            // If '@' is present, make comparison in email field
            user = await accountModel.findOne({ email: identifier });
            // Dbhepler. query
        }
        else {
            // Otherwise, find in username field
            user = await accountModel.findOne({ username: identifier });
        }
        // If no user found
        if (!user) {
            console.log('Incorrect username or email. Please try again!');
            return;
        }
        // TODO using with hash function ( md5 ) -> hash(password + SALT)
        // If user found, compare password
        if (user.password !== password) {
            return;
        }
        if (user.status !== AccountStatus_enums_1.EStatus.Active) {
            return;
        }
        return user;
    }
    catch (error) {
        console.error('Error occurred while logging in: ', error);
    }
}
//dbHelper's function:
//QueryDB
//Init Connection
//Destroy connection
//# sourceMappingURL=dbHelper.js.map