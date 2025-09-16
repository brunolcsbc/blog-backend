import { Request, Response, NextFunction } from "express";
import { PostsRepo } from "../respository/PostsRepo";
import { postSchema } from "../schemas/postSchema";
import { idSchema, stringSearch } from "../schemas/utils";
import { f_paginate } from "../utils/paginate";
import { CurtidaRepo } from "../respository/CurtidasRepo";
import { SuccessResponse } from "../ErrorSuccessHandler/SuccessResponse";

export class CurtidasController {

    private readonly repo = new CurtidaRepo();

    public async updateLikes(req: Request, res: Response, next: NextFunction) {
        try {
            const idPost = idSchema.parse( req.params.idpost );
            const idUser = (req as any).user.idusuario;
            const exists = await this.repo.getCurtida(idPost, idUser);
            if(exists) {
                await this.repo.delete( idPost, idUser );
            } else {
                await this.repo.create( idPost, idUser );
            }
            res.json(new SuccessResponse( exists ? "down" : "up"))
        } catch (err) {
            next(err)
        }
    }

    public async countLikesByPost(req: Request, res: Response, next: NextFunction) {
        // buscar e contar os likes de uma determinada postagem, retornar a contagem
        try {
            const idPost = idSchema.parse( req.params.idPost );
            const totalLikes = await this.repo.countLikesByPost( idPost );
            res.json(new SuccessResponse({ likes: totalLikes }))
        } catch (err) {
            next(err)
        }
    }
}