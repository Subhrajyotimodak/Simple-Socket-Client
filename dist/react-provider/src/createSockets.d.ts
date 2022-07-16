import { Socket, SocketParams } from "../../core";
interface Params {
    auth: SocketParams["auth"];
    [key: string]: string;
}
export declare function createSockets(namespaces: string[], url: string, params: Params): Readonly<{
    [key: string]: Socket;
}>;
export {};
