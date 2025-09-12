import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
    public name: string;

    constructor(messsage: string = "Credencial inválida") {
        super(messsage, 401);
        this.name = "UnauthorizedError";
    }

}