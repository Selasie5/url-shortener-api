// src/database.ts

import mongoose from 'mongoose';

const uri = 'mongodb+srv://selasisepenu5:aeonterry@cluster0.e6fwewn.mongodb.net/url-shortener?retryWrites=true&w=majority&appName=Cluster0/';


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
