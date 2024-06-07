import mongoose, { mongo } from "mongoose";

const personInfoSchema = new mongoose.Schema({
       firstName: {
              type: String,
              required: true
       },
       middleName: {
              type: String
       },
       lastName: {
              type: String,
              required: true
       },
       fatherName: {
              type: String,
              required: true
       },
       motherName: {
              type: String,
              required: true
       },
       gender: {
              type: String,
              required: true
       },
       age: {
              type: Number,
              required: true
       },
       profession: {
              type: String,
              required: true
       },
       mobileNumber: {
              type: Number,
              required: true
       },
       email: {
              type: String,
              required: true
       },
       profileImage: {
              type: String,
              required: true
       },
       addres: [{ type: mongoose.Schema.Types.ObjectId, ref: "addres" }],
       witnes: [{ type: mongoose.Schema.Types.ObjectId, ref: "witnes" }],
       policestation: { type: mongoose.Schema.Types.ObjectId, ref: "policestations" }
})

const address = new mongoose.Schema({
       mnumber: { type: Number, required: true },
       gnumber: { type: Number, required: true },
       colony: { type: String, required: true },
       village: { type: String, required: true },
       post: { type: String, required: true },
       district: { type: String, required: true },
       country: { type: String, required: true },
       policestation: { type: String, required: true },
       pincode: { type: String, required: true },
       stable: { type: Boolean },
       image: { type: String },
       characterverify: { type: mongoose.Schema.ObjectId, ref: "characterverify" }
});

const witness = new mongoose.Schema({
       fname: { type: String, required: true },
       mname: { type: String },
       lname: { type: String, required: true },
       gender: { type: String },  // Make gender optional
       mobileno: { type: Number, required: true },
       pincode: { type: Number, required: true },
       addres: { type: String, required: true },
       relation: { type: String, required: true },
       characterverify: { type: mongoose.Schema.Types.ObjectId, ref: "characterverify" },
});


export const characterverify = new mongoose.model("characterverify", characterVerify);
export const addres = new mongoose.model("addres", address);
export const witnes = new mongoose.model("witnes", witness);
