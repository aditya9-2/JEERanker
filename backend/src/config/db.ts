import mongoose from "mongoose";

const connectDB = async () => {

    try {

        const mongoUri = process.env.MONGO_CONNECT_URL;

        if (!mongoUri) {
            throw new Error("MONGO_CONNECT_URL environment variable is not set");
        }

        await mongoose.connect(mongoUri);
        console.log(`DB connected successfully`);

    } catch (err) {

        console.log(`Connection Failed: ${err}`);

    }
}

export default connectDB;