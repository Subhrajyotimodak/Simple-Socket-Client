import Socket, { SocketParams } from "./core/Socket";
import { createSockets } from "./react-provider/createSockets";
import SocketProvider, { useSocket } from "./react-provider/SocketProvider";
import SocketError, { isSocketError } from "./utils/error";
import { Request, Response } from "./utils/typedefs";

const core = { Socket };
const reactProvider = { SocketProvider, useSocket, createSockets };
const utils = { SocketError, isSocketError };

export { core, reactProvider, utils };
export type { SocketParams, Request, Response };
