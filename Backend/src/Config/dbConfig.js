import mongoose from "mongoose";
const conString = process.env.DBSTRING;
export async function ConfigureDb() {
    try {
        await mongoose.connect("mongodb+srv://rishabhkumrawat40:Rishabh%40123456@cluster0.v7cxa0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DB Connected....");
    }
    catch (error) {
        console.log(error);
    }
   
}