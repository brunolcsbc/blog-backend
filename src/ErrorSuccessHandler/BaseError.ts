export class BaseError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;

        // Corrige a cadeia de protótipos (boa prática no TS/Node)
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
