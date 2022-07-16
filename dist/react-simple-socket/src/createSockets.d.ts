import Socket from "core";
import { SocketParams } from "core/src/Socket";
interface Params {
    auth: SocketParams["auth"];
    [key: string]: string;
}
export declare function createSockets(namespaces: string[], url: string, params: Params): Readonly<{
    [key: string]: Socket;
}>;
export {};
