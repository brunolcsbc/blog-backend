import multer from 'multer';
import * as path from "node:path";
import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'node:crypto';
import { ValidationError } from '../../src/ErrorSuccessHandler/ValidationError';


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const name = randomUUID();
//     cb(null, name + ext);
//   }
// });

const storage = multer.memoryStorage();

const fileFilter = (req: any, file: any, cb: any) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new ValidationError(`Aquivo ${path.extname(file.originalname)} não suportado`));
    }
};

const upload = multer({ storage, fileFilter });

export const avatarUpload = upload.single('avatar');