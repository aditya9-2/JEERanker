import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import userRouter from "./routes/userRouter"
import connectDB from "./config/db";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use('/api/v1/user', userRouter);


app.listen(port, async () => {

    await connectDB();
    console.log(`server listenging at http://localhost${port}`);

})

