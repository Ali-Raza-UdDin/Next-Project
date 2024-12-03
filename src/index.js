// require('dotenv').config('./.env')

import mongoose from "mongoose";

import express from "express";
import dotenv from "dotenv";
import { db_connect}  from "./db/index.js";

dotenv.config('./.env');

db_connect();

const app = express();












// ;(async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on('error', error => {
//             console.log(error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));

//     } catch (error) {
//         console.log(error);
//         throw error
//     }
// })()