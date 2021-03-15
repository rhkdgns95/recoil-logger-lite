import { atom } from "recoil";
import { effects_UNSTABLE } from "recoil-logger-lite";

export const countAtom = atom<number>({
  key: "atom/count",
  default: 0,
  effects_UNSTABLE,
});
