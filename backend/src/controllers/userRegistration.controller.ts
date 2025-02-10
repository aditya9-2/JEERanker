import { Request, Response } from "express"
import userModel from "../models/user.model";
import bcrypt from "bcryptjs"


const userRegistration = async (req: Request, res: Response) => {
    const { username, fullName, email, phoneNumber, DOB, password } = req.body;

    try {

        if (!username || !fullName || !email || !phoneNumber || !DOB || !password) {
            res.status(400).json({
                message: "All the fields are required",
            });
            return;
        }

        const isUserExists = await userModel.findOne({ username });

        if (isUserExists) {
            res.status(409).json({
                message: "user already exists",
            });
            return;
        }

        const salt: string | number = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await userModel.create({
            username,
            fullName,
            email,
            phoneNumber,
            DOB,
            password: hashedPassword
        });

        res.status(200).json({
            message: "User created successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: "Internal server error while registration",
            error: err
        });
        return;
    }

}



export default userRegistration