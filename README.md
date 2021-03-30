# recoil-logger-lite
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/rhkdgns95/recoil-logger-lite/blob/master/LICENSE)
- Recoil (logity) print state change information.
- [Demo](https://codesandbox.io/s/recoil-logger-lite-example-forked-vkuty)

![main_exam](./screenshot2.gif)


## install
```bash
yarn add -D recoil-logger-lite
```
or
```
npm install -D recoil-logger-lite
```

## example
> index.tsx
```tsx
import React from "react";
import ReactDOM from 'react';
import { App } from "./App";
import { RecoilRoot } from 'recoil';
import { DebugObserver } from 'recoil-logger-lite';

ReactDOM.render(
    <RecoilRoot>
        <App />
        {
            process.env.NODE_ENV !== 'production' && (
                <DebugObserver type="object" /> // print type:  (Default) "object" | "string"
            )
        }
    </RecoilRoot>
    , document.getElementById("root"));
```

> src/recoil/atom.ts
```tsx
import { atom } from "recoil";
import { effects_UNSTABLE } from "recoil-logger-lite";

interface IUser {
  id: number;
  username: string;
}

export const countAtom = atom<number>({
  key: "member/home/no",
  default: 0,
  effects_UNSTABLE,
});

export const userAtom = atom<IUser>({
  key: "mypage/user",
  default: {
    id: 0,
    username: "",
  },
  effects_UNSTABLE,
});

```

## screenshot
![capture1](./capture1.PNG)
![exam](./screenshot.gif)
