import { BaseError } from "./BaseError";

export class ValidationError extends BaseError {

    public name: string;

    constructor(messsage: string = "Erro de validação dos dados enviados") {
        super(messsage, 409);
        this.name = "ValidationError";
    }

}