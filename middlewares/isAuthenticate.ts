import { Request, Response, NextFunction } from "express";
import jwt  from "jsonwebtoken";
import { UnauthorizedError } from "../src/ErrorSuccessHandler/UnauthorizedError";
import { ForbiddenError } from "../src/ErrorSuccessHandler/ForbiddenError";

interface Options {
  excludedPaths?: string[];       // rotas que não precisam de login
  excludedMethods?: string[];     // métodos HTTP que não precisam de login
}

export function isAuthenticate(options: Options = {}) {
    const { excludedPaths = [], excludedMethods = [] } = options;

    return (req: Request, res: Response, next: NextFunction) => {
        // Ignora rota ou método
        if (excludedPaths.includes(req.path) || excludedMethods.includes(req.method)) {
            return next();
        }

        const authHeader = req.headers["authorization"];
        const token = authHeader?.split(" ")[1];

        if (!token) throw new UnauthorizedError("É necessário estar logado");

        jwt.verify(token, process.env.JWT_ACCESS_SECRET as string, (err, user) => {
            if (err) throw new ForbiddenError("Token inválido ou expirado");
            (req as any).user = user;
        next();
        });
    };
}