import mongoose from "mongoose";
const dbString = process.env.DBSTRING;
export async function ConfigureDb() {
    try {
        await mongoose.connect(dbString)
        console.log("DB Connected....");
    }
    catch (error) {
        console.log(error);
    }
   
}