import React from "react";
import { AtomEffect } from "recoil";
declare type TPrintType = "string" | "object";
interface IProps {
    printType?: TPrintType;
}
export declare const DebugObserver: React.FC<IProps>;
export declare const effects_UNSTABLE: readonly AtomEffect<any>[] | undefined;
export {};
