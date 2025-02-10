import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    DOB: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

});

export default mongoose.model('User', userSchema);