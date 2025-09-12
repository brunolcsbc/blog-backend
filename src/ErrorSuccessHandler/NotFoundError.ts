import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
    public name: string;

    constructor(messsage: string = "Recurso não encontrado") {
        super(messsage, 404);
        this.name = "NotFoundError";
    }


}