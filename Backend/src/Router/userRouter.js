import express from "express";
import { register, verifyOtp, login } from "../Controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.post("/register/verify", verifyOtp);

userRouter.post("/login", login);

export default userRouter;