import mongoose from "mongoose";

const vehicleComplainSchema = new mongoose.Schema({
        vechicleName: {
                type: String,
                required: true
        },
        vehicleModelNo: {
                type: String,
                required: true
        },
        vehicleType: {
                type: String,
                required: true,
                enum: ['2-Wheeler', '3-Wheeler', '4-Wheeler', 'Bus', 'Truck', 'Other']
        },
        vehiclePrice: {
                type: Number,
                required: true
        },
        vehicleImg: {
                type: String
        },
        ownerName: {
                type: String,
                required: true
        },
        ownerContact: {
                type: String,
                required: true
        },
        areaOfMissing: {
                type: String,
                required: true
        },
        missingTime: {
                type: String
        },
        missingDate: {
                type: String,
                required: true
        },
        description: {
                type: String
        },
        enquiryStatus: {
                type: String,
                default: "Pending"
        },
        officerCharge: {
                type: String,
                default: "As Soon As Charge"
        },
        officerContact: {
                type: Number
        },
        process: {
                type: String
        }
});

const generalTheftSchema = new mongoose.Schema({
        theftAmount: {
                type: String,
                required: true
        },
        missingItems: [String],
        location: {
                type: String,
                required: true
        },
        reportedPersonName: {
                type: String,
                required: true
        },
        reportedPersonContact: {
                type: String,
                required: true
        },
        date: {
                type: String,
                required: true
        },
        enquiryStatus: {
                type: String,
                default: "Pending"
        },
        description: {
                type: String
        },
        officerCharge: {
                type: String,
                default: "As Soon As Charge"
        },
        officerContact: {
                type: Number
        },
        process: {
                type: String
        }
});

const kidnappingReportSchema = new mongoose.Schema({
        victimName: {
                type: String,
                required: true
        },
        victimImage: {
                type: String,
                required: true
        },
        victimAge: {
                type: Number,
                required: true
        },
        missingDate: {
                type: String,
                required: true
        },
        location: {
                type: String,
                required: true
        },
        reportedPersonName: {
                type: String,
                required: true
        },
        reportedPersonContact: {
                type: String,
                required: true
        },
        enquiryStatus: {
                type: String,
                default: "Pending"
        },
        description: {
                type: String
        },
        officerCharge: {
                type: String,
                default: "As Soon As Charge"
        },
        officerContact: {
                type: Number
        },
        process: {
                type: String
        }
});

const VechicleComplainModel = new mongoose.model('vechicleComplainModel', vehicleComplainSchema);
const GeneralTheftModel = new mongoose.model('generalTheftModel', generalTheftSchema);
const KidnappingReportModel = new mongoose.model('kidnappingReportModel', kidnappingReportSchema);

export { VechicleComplainModel, GeneralTheftModel, KidnappingReportModel };
