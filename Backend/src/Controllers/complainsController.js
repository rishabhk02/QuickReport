import { StatusCodes } from "http-status-codes"
import { VechicleComplainModel, GeneralTheftModel, KidnappingReportModel } from "../Models/complainsModel.js";
import { UserModel } from "../Models/usersModel.js";

export async function saveGeneralTheftComplain(req, res) {
    try {
        const newComplain = await GeneralTheftModel.create(req.body);
        if (newComplain) {
            let updateUser = await UserModel.findOneAndUpdate({ _id: req.user.userId }, { $push: { generalTheftComplains: newComplain?._id } });
        }
        return res.status(StatusCodes.CREATED).json({ newComplain });
    }
    catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
}

export async function saveVehicleComaplain(req, res) {
    try {
        let data = req.body;
        const image = `${process.env.BACKEND_URL}/${req.file.filename}`;
        data['vehicleImg'] = image;

        const newComplain = await VechicleComplainModel.create(data);
        if (newComplain) {
            let updateUser = await UserModel.findOneAndUpdate({ _id: req.user.userId }, { $push: { vehicleComplains: newComplain?._id } });
        }
        return res.status(StatusCodes.CREATED).json({ newComplain });
    }
    catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
}

export async function saveKidnappingComplain(req, res) {
    try {
        let data = req.body;
        const image = `${process.env.BACKEND_URL}/${req.file.filename}`;
        data['victimImage'] = image;

        const newComplain = await KidnappingReportModel.create(data);
        if (newComplain) {
            let updateUser = await UserModel.findOneAndUpdate({ _id: req.user.userId }, { $push: { kidnappingReports: newComplain?._id } });
        }
        return res.status(StatusCodes.CREATED).json({ newComplain });
    }
    catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
}

