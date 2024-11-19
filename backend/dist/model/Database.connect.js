"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { AccountModel } = require('./User.model');
const mongoURI = 'mongodb://localhost:27017/pdnn-db';
// Establish connection to database
const dbConnect = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI);
        console.log('Successfully connected to database');
        // Create the 'accounts' collection if it doesn't exist
    }
    catch (error) {
        console.log('Error connecting to database:', error);
    }
};
exports.default = dbConnect;
//# sourceMappingURL=Database.connect.js.map