import mongoose from 'mongoose';
import {accountStatus, EStatus} from "../../model/AccountStatus.enums";
import {IUser} from "../test/TestServiceInterface";

// Define MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/pdnn-db';

// Define Schema and Model for a document of users
const accountSchema = new mongoose.Schema({
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
    status: {type: String, enum: Object.values(accountStatus)},
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
})

const accountModel = mongoose.model('accounts', accountSchema);

// Connect to database and post user information
mongoose.connect(mongoURI)
    .then(async () => {
        console.log('Successfully connected to database');
        // Create an instance of the document, save it to create collection
        await accountModel.create({
            username: 'Jisoo',
            email: 'Jisoo@gmail.com',
            address: '123 5th Avenue',
            password: 'pass123',
            employeeCode: 'EMP01',
            status: accountStatus.ACTIVE,
            updatedAt: new Date()
        });
        console.log('User created successfully')
    })
    .catch((error) => {
        console.log('Error connecting to database: ', error)
    });
// Check username and password when logging in
async function loginUser(identifier: String, password: String) {
    try {
        let user: IUser = {} as  IUser;
        // Check if identifier contains '@' symbol
        // TODO using with regex
        if(identifier.includes('@')) {
            // If '@' is present, make comparison in email field
            user = await accountModel.findOne({email: identifier});
            // Dbhepler. query
        } else {
            // Otherwise, find in username field
            user = await accountModel.findOne({ username: identifier});
        }
        // If no user found
        if (!user) {
            console.log('Incorrect username or email. Please try again!');
            return;
        }

        // TODO using with hash function ( md5 ) -> hash(password + SALT)
        // If user found, compare password
        if (user.password !== password) {
            return
        }

        if (user.status !== EStatus.Active) {
            return;
        }

        return user;

    } catch(error) {
        console.error('Error occurred while logging in: ', error)
    }
}

//dbHelper's function:
//QueryDB
//Init Connection
//Destroy connection