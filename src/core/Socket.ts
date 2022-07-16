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
    };
    const request = JSON.stringify(__data__);

    if (this.connected) {
      this.websocket.send(request);
      return true;
    }
    return false;
  }

  recieve<T = any>(namespace: string, callback: (data: T) => void) {
    if (this.connected) {
      this.websocket.onmessage = (ev) => {
        let __data__ = ev.data as string | T;
        if (typeof __data__ === 'string') {
          __data__ = JSON.parse(__data__) as T;
        }

        callback(__data__);

      }
    }
    return false;
  }
}
