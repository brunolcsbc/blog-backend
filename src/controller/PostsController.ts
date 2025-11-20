import { Request, Response, NextFunction } from "express";
import { PostsRepo } from "../respository/PostsRepo";
import { postSchema } from "../schemas/postSchema";
import { idSchema, stringSearch } from "../schemas/utils";
import { f_paginate } from "../utils/paginate";
import { SuccessResponse } from "../ErrorSuccessHandler/SuccessResponse";
import { NotFoundError } from "../ErrorSuccessHandler/NotFoundError";

export class PostsController {

    private readonly repo = new PostsRepo();

    public async createPost(req: Request, res: Response, next: NextFunction) {
        try {
            const data = postSchema.parse({...req.body, idusuario: (req as any).user.idusuario });
            const posts = await this.repo.create(data);
            res.json(new SuccessResponse(posts));
        } catch(err) {
            next(err)
        }
    }
    
    public async updatePost(req: Request, res: Response, next: NextFunction) {
        try {
            const id = idSchema.parse(req.params.idpost);
            const exists = await this.repo.getById(id);
            if(!exists) throw new NotFoundError("Post não encontrado com o id fornecido");
            const data = postSchema.parse(req.body);
            const posts = await this.repo.update(id, data);
            res.json(new SuccessResponse(posts));
        } catch(err) {
            next(err)
        }
    }
    
    public async deletePost(req: Request, res: Response, next: NextFunction) {
        try {
            const id = idSchema.parse(req.params.idpost);
            const exists = await this.repo.getById(id);
            if(!exists) throw new NotFoundError("Post com o id informado não existe");
            const { idpost } = await this.repo.delete(id);
            res.json(new SuccessResponse(idpost));
        } catch(err) {
            next(err)
        }
    }

    public async getAllPosts(req: Request, res: Response, next: NextFunction) {
        try {
            const { perpage, page } = req.query;
            const perPageNumber: number = Number(perpage) || 25;
            const pageNumber: number = Number(page) || 1;

            const totalRecords = await this.repo.countAll();
            const paginate = f_paginate( pageNumber, perPageNumber, totalRecords );
            const data = await this.repo.getAll(paginate.perPage, paginate.from, (req as any).user.idusuario);
            res.json(new SuccessResponse(data, paginate));
        } catch(err) {
            next(err)
        }
    }

    public async getPostByID(req: Request, res: Response, next: NextFunction) {
        try {
            const id = idSchema.parse(req.params.idpost);
            const data = await this.repo.getById(id);
            if(!data) throw new NotFoundError("Post com o id fornecido não encontrado");
            res.json(new SuccessResponse(data));
        } catch (err) {
            next(err)
        }
    }
    public async getAllPostsByUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = idSchema.parse(req.params.iduser);
            const data = await this.repo.getPostsByUser(id);
            res.json(new SuccessResponse(data));
        } catch (err) {
            next(err)
        }
    }
    public async getPostsBySearchContent(req: Request, res: Response, next: NextFunction) {
        try {
            const params = req.query.content as string;
            if(!params) return res.json(new SuccessResponse([]));

            const idUser = (req as any).user.idusuario;
            let data = await this.repo.getPostsByContent(params, idUser);
            res.json(new SuccessResponse(data));
        } catch (err) {
            next(err)
        }
    }
    public async getPostsBySearchTitle(req: Request, res: Response, next: NextFunction) {
        try {
            const params = req.query.title as string;
            if(!params) return res.json(new SuccessResponse([]));

            const idUser = (req as any).user.idusuario;
            let data = await this.repo.getPostsByTitle(params, idUser);
            res.json(new SuccessResponse(data));
        } catch (err) {
            next(err)
        }
    }
    public async getPostsLikedByUser(req: Request, res: Response, next: NextFunction) {
        try {
            const idUser = idSchema.parse(req.params.iduser);
            const data = await this.repo.getPostsLikedByUser(idUser);
            res.json(new SuccessResponse(data));
        } catch (err) {
            next(err)
        }
    }
    
}