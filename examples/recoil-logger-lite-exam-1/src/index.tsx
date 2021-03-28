import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { RecoilRoot } from 'recoil';
import { DebugObserver } from 'recoil-logger-lite';

ReactDOM.render(
    <RecoilRoot>
        <App />
        {
            process.env.NODE_ENV !== 'production' && (
                <DebugObserver />
            )
        }
    </RecoilRoot>
    , document.getElementById("root"));
