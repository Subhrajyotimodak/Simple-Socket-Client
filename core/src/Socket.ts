import { Response, SocketError, Request } from "../../utils";

export interface SocketParams {
  auth: string;
  namespace?: string;
  [key: string]: any;
}

export default class Socket {
  private websocket: WebSocket;
  private connected = false;

  constructor(url: string, params: SocketParams) {
    const urlParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      const data = params[key] as string;
      if (data) {
        urlParams.set(key, data);
      }
    });
    const _url = `${url}?${urlParams.toString()}`;
    this.websocket = new WebSocket(_url);
    this.connect();
  }

  connect() {
    this.websocket.onopen = () => {
      this.connected = true;
    };
  }

  disconnect() {
    this.websocket.close();
    this.connected = false;
  }

  send<T = {}>(namespace: string, data: T) {
    const __data__ = {
      namespace,
      data,
    } as Request<T>;
    const request = JSON.stringify(__data__);

    if (this.connected) {
      this.websocket.send(request);
      return true;
    }
    return false;
  }

  recieve<T = any>(
    namespace: string,
    onSuccess: (data: T) => void,
    onError?: (error: SocketError) => void
  ) {
    if (this.connected) {
      this.websocket.onmessage = (ev) => {
        let __data__ = ev.data as string | Response<T>;
        if (typeof __data__ === "string") {
          __data__ = JSON.parse(__data__) as Response<T>;
        }

        const __error__ = SocketError.checkError(__data__);
        if (__error__) {
          onError?.(__error__);
          return;
        }

        if (__data__["namespace"] === namespace) onSuccess(__data__.data);
      };
    }
    return false;
  }
}
