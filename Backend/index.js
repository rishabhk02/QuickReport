import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import { ConfigureDb } from "./src/Config/dbConfig.js";
import mainRouter from "./routes.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(mainRouter);

app.listen(PORT, () => {
        console.log(`Server is Running Port number ${PORT}`);
});

ConfigureDb();