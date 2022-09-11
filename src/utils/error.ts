import { Response } from "./typedefs";

export default class SocketError extends Error {
  public type: "client" | "server" | "other";
  public code: number;
  public name: string;
  public stack?: string | undefined;
  public message: string;

  constructor(code: number, name: string, message: string) {
    super();
    this.type = "other";
    this.code = code;
    this.name = name;
    this.message = message;
    // this.stack = super.stack;
  }

  static checkError(response: Response) {
    if (response.code >= 200 && response.code <= 299) {
      return null;
    }
    const error = new SocketError(
      response.code,
      response.status,
      response.data
    );
    if (response.code >= 400 && response.code <= 499) {
      error.type = "client";
      return error;
    }
    if (response.code >= 500 && response.code <= 599) {
      error.type = "server";
      return error;
    }

    error.type = "other";
    return error;
  }

  isSocketError() {
    return !!this?.["type"];
  }
}

export function isSocketError(error: any) {
  return !!error && error?.isSocketError && error?.isSocketError?.();
}
