import { InstancePrisma } from "../../prisma/PrismaSingleton";
import { posts } from "../../prisma/generated/prisma";

export class PostsRepo {
    private readonly prismaModel = InstancePrisma.getInstance().posts
    
    public async create(data: Omit<posts, "idpost" | "data_criacao">): Promise<posts> {
        return await this.prismaModel.create({ data: data });
    }

    public async update(idPost: number, data: Partial<posts>): Promise<posts> {
        return await this.prismaModel.update({
            where: { idpost: idPost },
            data: data
        })
    }

    public async delete(idPost: number): Promise<posts> {
        return await this.prismaModel.delete({
            where: {
                idpost: idPost
            }
        })
    }

    public async getById(idPost: number): Promise<posts | null> {
        return await this.prismaModel.findUnique({
            where: {
                idpost: idPost
            },
            include: {
                usuarios: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        email: true,
                        avatar_url: true
                    }
                }
            }
        })
    }

    public async getAll(limit: number, offset: number, idusuario: number) {
        return await this.prismaModel.findMany({
            take: limit,
            skip: offset,
            include: {
                usuarios: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        email: true,
                        avatar_url: true
                    }
                },
                _count: {
                    select: { curtidas: true }
                },
                curtidas: {
                    where: {
                        idusuario: idusuario,
                    },
                    select: { idusuario: true },
                },
            }
        })
    }

    public async countAll(): Promise<number> {
        return await this.prismaModel.count();
    }

    public async getPostsByUser(idUser: number): Promise<posts[]> {
        return await this.prismaModel.findMany({ 
            where: { idusuario: idUser },
            include: {
                _count: { select: { curtidas: true} }
            }
        })
    }

    public async getPostsByTitle(value: string) {                            
        return await this.prismaModel.findMany({
            where: {
                titulo: {
                    contains: value, mode: 'insensitive'
                }
            },
            include: {
                usuarios: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        email: true,
                        avatar_url: true
                    }
                }
            }
        })
    }

    public async getPostsByContent(value: string) {                            
        return await this.prismaModel.findMany({
            where: {
                conteudo: {
                    contains: value, mode: 'insensitive'
                }
            },
            include: {
                usuarios: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        email: true,
                        avatar_url: true
                    }
                }
            }
        })
    }

    public async getPostsLikedByUser(idUser: number) {                            
        return await this.prismaModel.findMany({
            where: {
                usuarios: {
                    idusuario: idUser
                }
            },
            include: {
                usuarios: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        email: true,
                        avatar_url: true
                    }
                }
            }
        })
    }
}