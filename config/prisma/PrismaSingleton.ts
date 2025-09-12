import { PrismaClient } from "./generated/prisma";

export class InstancePrisma {
    private static instance: PrismaClient | null = null;

    private constructor() {}

    public static getInstance(): PrismaClient {
        if(this.instance == null) {
            this.instance = new PrismaClient()
        }
        return this.instance;
    } 
}