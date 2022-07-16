import React from "react";
import Socket from "../core/Socket";
interface Props {
    providers: {
        [key: string]: Socket;
    };
    children: React.ReactNode;
}
export declare type Providers = Props["providers"];
export default function SocketProvider({ providers, children }: Props): JSX.Element;
export declare function socketReducer(state: {
    [key: string]: Socket;
}): {
    [key: string]: Socket;
};
export declare function useSocket(namespace: string): Socket;
export {};
