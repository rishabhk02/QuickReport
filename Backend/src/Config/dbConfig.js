import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
const DBSTRING = process.env.DBSTRING;

export async function ConfigureDb() {
    try {
        await mongoose.connect(DBSTRING);
        console.log("DB Connected....");
    }
    catch (error) {
        console.error(error);
    }
}