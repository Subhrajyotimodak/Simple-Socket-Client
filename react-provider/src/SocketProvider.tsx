import React from "react";
import Socket from "core";

interface Props {
  providers: {
    [key: string]: Socket;
  };
  children: React.ReactNode;
}
export type Providers = Props["providers"];

const SocketContext = React.createContext<Props["providers"]>({});

export default function SocketProvider({ providers, children }: Props) {
  const [state] = React.useReducer(socketReducer, providers);

  return (
    <SocketContext.Provider value={state}>{children}</SocketContext.Provider>
  );
}

export function socketReducer(state: { [key: string]: Socket }) {
  return state;
}

export function useSocket(namespace: string) {
  const sockets = React.useContext(SocketContext);
  if (Object.keys(sockets).includes(namespace)) {
    return sockets[namespace];
  }

  throw new Error("Unable to find socket with namespace " + namespace);
}

