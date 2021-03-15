import { atom } from "recoil";
import { effects_UNSTABLE } from "recoil-logger-lite";

interface IUser {
  id: number;
  username: string;
}

export const userAtom = atom<IUser>({
  key: "atom/user",
  default: {
    id: 0,
    username: "",
  },
  effects_UNSTABLE,
});
