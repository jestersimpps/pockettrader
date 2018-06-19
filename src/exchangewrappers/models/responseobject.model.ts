export class ResponseObject<T> {
    readonly status: number;
    readonly message: string;
    readonly response: T;
}
