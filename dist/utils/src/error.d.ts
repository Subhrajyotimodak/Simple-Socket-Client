import { Response } from "./typedefs";
export default class SocketError extends Error {
    type: "client" | "server" | "other";
    code: number;
    name: string;
    stack?: string | undefined;
    message: string;
    constructor(code: number, name: string, message: string);
    static checkError(response: Response): SocketError | null;
    isSocketError(): boolean;
}
export declare function isSocketError(error: any): any;
