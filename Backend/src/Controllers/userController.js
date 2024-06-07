import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import twilio from "twilio";
import { UserModel } from "../Models/usersModel.js";
import { policeStation } from "../Models/DepartmentSchema.js";

// Register New User
export async function register(req, res) {
    try {
        const { name, mobileNumber, email, password, age, gender, city } = req.body;
        if (!name) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Name required' });
        if (!mobileNumber) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Mobile number required' });
        if (!email) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Email required' });
        if (!password) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Password required' });
        if (!age) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Age required' });
        if (!gender) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Gender required' });
        if (!city) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'City required' });

        let exist = await UserModel.findOne({ mobileNumber });
        if (exist) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Mobile number already registered' });
        }
        exist = await UserModel.findOne({ email });
        if (exist) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Email already registered' });
        }

        const otp = await otpVerification(mobileNumber);
        const hashedPassword = bcrypt.hashSync(password, 12);

        let data = req.body;
        data['password'] = hashedPassword;
        data['verify'] = false;
        data['otp'] = otp;

        const newUser = await UserModel.create(data);

        return res.status(StatusCodes.CREATED).json({ newUser });
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

//OTP-verification
const otpVerification = async (number) => {
    try {
        var otp = Math.floor(1000 + Math.random() * 9000);
        /*const accountSid = process.env.ACCOUNTSID;
        const authToken = process.env.AUTHTOKEN;
        const client = twilio(accountSid, authToken);
        console.log(authToken);
        console.log(number);
        client.messages
            .create({
                body: `We are always Protect you Verify ${otp}`,
                to: `+91${number}`, // Text your number
                from: '+18722137291', // From a valid Twilio number
            })
            .then((message) => console.log(message.sid));*/
        return otp;
    }
    catch (error) {
        console.log(error);
    }
}

//verifyOtp
export async function verifyOtp(req, res) {
    try {
        const { mobileNumber, otp } = req.body;
        const user = await UserModel.findOne({ mobileNumber });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND)
                .json({ message: "User not found" });
        }

        if (!user.verify && user.otp === otp) {
            await UserModel.updateOne({ mobileNumber }, { $set: { verify: true } });
            return res.status(StatusCodes.OK)
                .json({ message: "OTP Verification Successful" });
        }
        else {
            return res.status(StatusCodes.UNAUTHORIZED)
                .json({ message: "Invalid Otp" })
        }

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}



export async function login(req, res) {
    try {
        const { mobileNumber, password } = req.body;
        const user = await UserModel.findOne({ mobileNumber })
        .populate('vehicleComplains').populate('generalTheftComplains').populate('kidnappingReports');

        if (!user) {
            return res.status(StatusCodes.NOT_FOUND)
                .json({ message: "Invalid Credentials" });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(StatusCodes.FORBIDDEN).json({ message: "Invalid Credentials" });
        }

        if (!user.verify) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please verify you account' });
        }

        const data = await policeStation.find();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRETE_KEY);
        const response = {
            token,
            userId: user._id,
            email: user.email,
            name: user.name,
            vehicleComplains: user.vehicleComplains,
            generalTheftComplains: user.generalTheftComplains,
            kidnappingReports: user.kidnappingReports,
            policeStation: data[0]?._id || null,
        }

        return res.status(StatusCodes.OK).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}