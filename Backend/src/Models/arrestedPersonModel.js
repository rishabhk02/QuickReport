import mongoose from "mongoose";

const arrestedPersonSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true
        },
        arrestedPersonImage: {
                type: String,
                required: true
        },
        age: {
                type: Number,
                required: true
        },
        crimeCommitted: {
                type: String,
                required: true
        },
        description: {
                type: String,
                required: true
        },
        arrestedDate: {
                type: String
        },
        inchargeOfficer: {
                type: String,
                required: true
        },
        policeStation: {
                type: String,
                required: true
        },
})

export const ArrestedPersonModel = new mongoose.model("ArrestedPerson", arrestedPersonSchema);
