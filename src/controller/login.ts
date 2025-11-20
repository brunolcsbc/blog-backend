import { Request, Response, NextFunction } from "express";
import { UserRepo } from "../respository/UserRepo";
import { loginSchema } from "../schemas/loginSchema";
import { UnauthorizedError } from "../ErrorSuccessHandler/UnauthorizedError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SuccessResponse } from "../ErrorSuccessHandler/SuccessResponse";
import { ForbiddenError } from "../ErrorSuccessHandler/ForbiddenError";

export class LoginController {
    private readonly userRepo = new UserRepo();

    public async login(req: Request, res: Response, next: NextFunction) {
        const { email, senha } = loginSchema.parse(req.body);

        const user = await this.userRepo.getByEmail(email);
        if (!user) throw new UnauthorizedError("Email ou senha inválidos");

        const isPasswordValid: boolean = bcrypt.compareSync(senha, user.senha);
        if (!isPasswordValid) throw new UnauthorizedError("Email ou senha inválidos");

        const accessToken: string = jwt.sign({ idusuario: user.idusuario }, process.env.JWT_ACCESS_SECRET as string, { expiresIn: "1m" });
        const refreshToken: string = jwt.sign({ idusuario: user.idusuario }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: "8h" });
        
        res.cookie("token", refreshToken, { 
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            signed: true,
            maxAge: 1000 * 60 * 60 * 8,
            sameSite: 'strict'
        }).json(new SuccessResponse({ token: accessToken, id: user.idusuario, nome: user.nome }));
    }

    public async refreshToken(req: Request, res: Response, next: NextFunction) {
        
        const refreshToken = req.signedCookies.token;
        if (!refreshToken) return res.sendStatus(401);
        // if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403); Buscar no banco de dados o token

        jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string, (err: any, user: any) => {
            if (err) throw new ForbiddenError("É necessário fazer o login");

            const accessToken = jwt.sign({ username: user.username }, process.env.JWT_ACCESS_SECRET as string, { expiresIn: "15m" });
            res.json(new SuccessResponse({ token: accessToken }));
        });

    }

    public async logout(req: Request, res: Response, next: NextFunction) {
        const refreshToken = req.signedCookies.token;
        res.clearCookie("token");
        res.json(new SuccessResponse("Logout realizado com sucesso"));
    }
}