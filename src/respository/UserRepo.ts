import { InstancePrisma } from "../../config/prisma/PrismaSingleton";
import { usuarios } from "../../config/prisma/generated/prisma";

export class UserRepo {
    private readonly prismaModel = InstancePrisma.getInstance().usuarios
    
    public async create(data: Omit<usuarios, "idusuario" | "data_registro">): Promise<usuarios> {
        return await this.prismaModel.create({ data: data });
    }

    public async update(idUsuario: number, data: Partial<usuarios>): Promise<usuarios> {
        return await this.prismaModel.update({
            where: { idusuario: idUsuario },
            data: data
        })
    }

    public async delete(idUsuario: number): Promise<usuarios> {
        return await this.prismaModel.delete({
            where: {
                idusuario: idUsuario
            }
        })
    }

    public async getById(idUsuario: number): Promise<usuarios | null> {
        return await this.prismaModel.findUnique({
            where: {
                idusuario: idUsuario
            },
        })
    }

    public async getByEmail(email: string): Promise<usuarios | null> {
        return await this.prismaModel.findUnique({
            where: {
                email: email
            }
        })
    }

    public async getAll(limit: number, offset: number): Promise<usuarios[]> {
            return await this.prismaModel.findMany({
                take: limit,
                skip: offset
            })
        }
    
    public async countAll(): Promise<number> {
        return await this.prismaModel.count();
    }
}