import Socket from "core";
import { SocketParams } from "core/src/Socket";
import { Providers } from "./SocketProvider";

interface Params {
  auth: SocketParams["auth"];
  [key: string]: string;
}
export function createSockets(
  namespaces: string[],
  url: string,
  params: Params
) {
  const sockets: Providers = {};

  namespaces.forEach((namespace) => {
    const _params = {
      ...params,
      namespace,
    };
    const socks = new Socket(url, _params);

    sockets[namespace] = socks;
  });

  return Object.freeze(sockets);
}
