import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true
        },
        mobileNumber: {
                type: String,
                required: true
        },
        email: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        },
        gender: {
                type: String,
                enum: ['Male', 'Female', 'Other'],
                required: true
        },
        age: {
                type: Number,
                required: true
        },
        address: { type: String },
        city: {
                type: String,
                required: true
        },
        verify: {
                type: Boolean
        },
        otp: {
                type: String
        },
        vehicleComplains: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "vechicleComplainModel"
        }],
        generalTheftComplains: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "generalTheftModel"
        }],
        kidnappingReports: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "kidnappingReportModel"
        }]
});

export const UserModel = new mongoose.model('userModel', userSchema);