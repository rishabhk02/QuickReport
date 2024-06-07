import express from "express";
import userRouter from "./src/Router/userRouter.js";
import complainsRouter from "./src/Router/complainsRouter.js";

const app = express();

app.use(userRouter);
app.use(complainsRouter);

export default app;



