import SocketError from "../utils/error";
export interface SocketParams {
    auth: string;
    namespace?: string;
    [key: string]: any;
}
export default class Socket {
    private websocket;
    private connected;
    constructor(url: string, params: SocketParams);
    connect(): void;
    disconnect(): void;
    send<T = {}>(namespace: string, data: T): boolean;
    recieve<T = any>(namespace: string, onSuccess: (data: T) => void, onError?: (error: SocketError) => void): boolean;
}
