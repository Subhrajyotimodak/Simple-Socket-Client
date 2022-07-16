import Socket, { SocketParams } from "./core/Socket";
import { createSockets } from "./react-provider/createSockets";
import SocketProvider, { useSocket } from "./react-provider/SocketProvider";
import SocketError, { isSocketError } from "./utils/error";
import { Request, Response } from "./utils/typedefs";
declare const core: {
    Socket: typeof Socket;
};
declare const reactProvider: {
    SocketProvider: typeof SocketProvider;
    useSocket: typeof useSocket;
    createSockets: typeof createSockets;
};
declare const utils: {
    SocketError: typeof SocketError;
    isSocketError: typeof isSocketError;
};
export { core, reactProvider, utils };
export type { SocketParams, Request, Response };
