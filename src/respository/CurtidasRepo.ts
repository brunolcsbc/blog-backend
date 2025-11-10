import { InstancePrisma } from "../../prisma/PrismaSingleton";
import { curtidas } from "../../prisma/generated/prisma";

export class CurtidaRepo {
    private readonly prismaModel = InstancePrisma.getInstance().curtidas
    
    public async create(idPost: number, idUsuario: number): Promise<curtidas> {
        return await this.prismaModel.create({ data: { idpost: idPost, idusuario: idUsuario } });
    }

    public async delete(idPost: number, idUsuario: number): Promise<curtidas> {
        return await this.prismaModel.delete({
            where: {
                idusuario_idpost: {
                    idpost: idPost,
                    idusuario: idUsuario
                }
            }
        })
    }

    public async getCurtida(idPost: number, idUsuario: number): Promise<curtidas | null> {
        return await this.prismaModel.findUnique({
            where: {
                idusuario_idpost: {
                    idpost: idPost,
                    idusuario: idUsuario
                }
            }
        })
    }

    public async countLikesByPost(idPost: number): Promise<number> {
        return await this.prismaModel.count({
            where: {
                idpost: idPost
            }
        })
    }

    public async getAll(idPost: number, idUsuario: number) {
        return await this.prismaModel.findMany({
            where: {
                idpost: idPost,
                idusuario: idUsuario
            },
            include: {
                
            }
        })
    }

}