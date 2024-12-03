import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const db_connect = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Mongo DB connection successfull ${connectionInstance.connection.host}`)
    } catch (error){
        console.log("error", error)
        process.exit(1);
    }
}