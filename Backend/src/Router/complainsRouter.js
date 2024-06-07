import multer from "multer";
import express from 'express';
import path from 'path';
import authMiddleware from "../Middlewares/authMiddlewares.js";
import { saveGeneralTheftComplain, saveVehicleComaplain, saveKidnappingComplain } from '../Controllers/complainsController.js';

const router = express.Router();
router.use(express.static('src/Images'));

const storage = multer.diskStorage(
    {
        destination: './src/Images',
        filename: (req, file, cb) => {
            return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    }
);

const upload = multer({ storage: storage });

router.post('/addGeneralTheftComplain', authMiddleware, saveGeneralTheftComplain);

router.post('/addVehicleComplain', authMiddleware, upload.single('vehicleImg'), saveVehicleComaplain);

router.post('/addKidnappingComplain', authMiddleware, upload.single('victimImage'), saveKidnappingComplain);

export default router;