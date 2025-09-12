export class SuccessResponse<T> {
    public success: boolean;
    public data: T;
    public error: null;
    public meta?: Record<string, any>;

    constructor(data: T, meta?: Record<string, any>) {
        this.success = true;
        this.data = data;
        this.error = null;
        if (meta) {
            this.meta = meta;
        }
    }
}