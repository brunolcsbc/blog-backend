import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { z, ZodError } from "zod";
import { BaseError } from '../src/ErrorSuccessHandler/BaseError';


export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            data: null,
            error: {
                code: err.statusCode,
                type: err.name,
                message: err.message
            }
        });
    }

    if (err instanceof ZodError) {
        return res.status(422).json({
            success: false,
            data: null,
            error: {
                code: 422,
                type: "ValidationError",
                message: "Erro de validação nos dados enviados",
                details: err.issues.map(e => ({
                    field: e.path.join("."),
                    message: e.message
                }))
            }
        });
    }

    if (err instanceof multer.MulterError) {
        return res.status(400).json({
            success: false,
            data: null,
            error: {
                code: 400,
                type: "MulterError",
                message: err.message
            }
        })
    };

    console.error(err);
    return res.status(500).json({
        success: false,
        data: null,
        error: {
            code: err.statusCode,
            type: "InternalServerError",
            message: "Erro interno no servidor"
        }
    });
}