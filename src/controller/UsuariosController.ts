import { Request, Response, NextFunction } from "express";
import { usuarioSchema } from "../schemas/usuarioSchema";
import { UserRepo } from "../respository/UserRepo";
import { SuccessResponse } from "../ErrorSuccessHandler/SuccessResponse";
import { emailSchema, idSchema } from "../schemas/utils";
import { ConflictError } from "../ErrorSuccessHandler/ConflictError";
import { NotFoundError } from "../ErrorSuccessHandler/NotFoundError";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

export class UsuariosController {

    private readonly repo = new UserRepo();

    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const dataValidated = usuarioSchema.parse(req.body);

            const exists = await this.repo.getByEmail(dataValidated.email);
            if(exists) throw new ConflictError("Email já cadastrado para usuário");

            let fileName: string = "";
            let filePath: string = ""; 

            if (req.file) {
                fileName = randomUUID() + path.extname(req.file.originalname);
                filePath = path.join('public', 'images', `${fileName}`);
                dataValidated.avatar_url = `/static/images/${fileName}`;
            }

            const { idusuario } = await this.repo.create(dataValidated);
            req.file && writeFileSync(filePath, req.file.buffer)
            res.json(new SuccessResponse({ idusuario }));
        } catch(err) {
            next(err)
        }
    }

    public async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = idSchema.parse(req.params.iduser);
            const exists = await this.repo.getById(id);
            if(!exists) throw new NotFoundError("O usuário com o id fornecido não encontrado");
            const dataValidated = usuarioSchema.parse(req.body);
            const { idusuario } = await this.repo.update(id, dataValidated);
            res.json(new SuccessResponse({ idusuario }));
        } catch(err) {
            next(err)
        }
    }

    public async deleteUser(req: Request, res: Response, next: NextFunction) {
        // apagar um usuário do banco
        try {
            const id = idSchema.parse(req.params.iduser);
            const exists = await this.repo.getById(id);
            if(!exists) throw new NotFoundError("O usuário com o id fornecido não encontrado");
            const { idusuario } = await this.repo.delete(id);
            res.json(new SuccessResponse({ idusuario }));
        } catch(err) {
            next(err)
        }
    }
    
    public async getUserByEmail(req: Request, res: Response, next: NextFunction) {
        // realizar a procura de usuário por email e retornar o id de usuário ou os dados de usuário
        try {
            const email = emailSchema.parse(req.params.email);
            const user = await this.repo.getByEmail(email);
            if(!user) throw new NotFoundError("Não existe usuário com o email fornecido");
            const { senha, ...data } = user;
            res.json(new SuccessResponse(data));
        } catch(err) {
            next(err)
        }
    }

    public async getUserByID(req: Request, res: Response, next: NextFunction) {
        // realizar a procura de usuário por ID e retornar os dados de usuário
        try {
            const id = idSchema.parse(req.params.iduser);
            const user = await this.repo.getById(id);
            if(!user) throw new NotFoundError("Não existe usuário com o email fornecido");
            const { senha, ...data } = user;
            res.json(new SuccessResponse(data));
        } catch(err) {
            next(err)
        }
    }

}