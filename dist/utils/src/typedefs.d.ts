export interface Request<T = any> {
}
export interface Response<T = any> {
    code: number;
    status: string;
    message: string;
    data: T;
    namespace: string;
}
