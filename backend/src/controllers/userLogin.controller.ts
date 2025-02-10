import { Request, Response } from "express"
import userModel from "../models/user.model";
import jwt from "jsonwebtoken";

const userLogin = async (req: Request, res: Response) => {

    const { username, password } = req.body;
    try {

        if (!username || !password) {
            res.status(400).json({
                message: "All the fields are required",
            });
            return;
        }

        const user = await userModel.findOne({ username });

        if (!user) {
            res.status(404).json({
                message: "user not found",
            });
            return;
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET as string);

        res.status(200).json({
            message: "user Login successfull",
            token
        });

    } catch (err) {
        res.status(500).json({
            message: "Internal server error while login",

        });
        return;
    }
}

export default userLogin