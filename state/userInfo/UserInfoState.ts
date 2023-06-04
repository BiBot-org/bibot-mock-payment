import { UserAuthInfo } from "@/types/user/types";
import { atom } from "recoil";

export const userInfoState = atom<UserAuthInfo>({
  key: `userInfo`,
  default: {
    isLogin: false,
    userId: "",
  },
});
