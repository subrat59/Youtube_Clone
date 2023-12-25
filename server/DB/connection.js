import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

const connection=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
        console.log("Connected Successfully DB")

    } catch (error) {
        console.log("Can't connect MONGO!!")
    }
}

export default connection
