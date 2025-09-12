import { BaseError } from "./BaseError";

export class ConflictError extends BaseError {

    public name: string;

    constructor(messsage: string = "Conflito: Recurso já existe") {
        super(messsage, 409);
        this.name = "ConflictError";
    }

}