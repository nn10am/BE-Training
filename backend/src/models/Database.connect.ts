import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/pdnn-db';

// Establish connection to database
const dbConnect = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Successfully connected to database');
    } catch(error) {
        console.log('Error connecting to database:', error);
    }
};
export default dbConnect;
