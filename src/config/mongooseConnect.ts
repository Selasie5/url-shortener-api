// src/database.ts

import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();
const uri = process.env.MONGODB_URI! as string;


const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, // Optional, but recommended
            useFindAndModify: false // Optional
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

export default connectDB;
