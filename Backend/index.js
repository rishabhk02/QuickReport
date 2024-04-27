import express from "express";
import cors from "cors";
import { ConfigureDb } from "./src/Config/dbConfig.js";
import router from "./src/Router/DepartmentRouter.js";
import userRouter from "./src/Router/userRouter.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(userRouter);

app.listen(5800,()=>{
        ConfigureDb();
        console.log("Server is Running Port number 5800 ");
})