import { BaseError } from "./BaseError";

export class ForbiddenError extends BaseError {
    public name: string;

    constructor(messsage: string = "Acesso negado") {
        super(messsage, 403);
        this.name = "ForbiddenError";
    }


}