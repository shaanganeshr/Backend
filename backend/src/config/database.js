import mongoose from 'mongoose';

const connectDB = async () => { //async we wait for the connection to be established before next steps
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connection error:`, error);
        process.exit(1); 
    }
}

export default connectDB;