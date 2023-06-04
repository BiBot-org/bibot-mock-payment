import NextAuth from "next-auth/next";
import { ISODateString } from "next-auth";
import { TokenRes } from "./auth/types";

declare module "next-auth" {
  interface DefaultSession {
    expires: ISODateString;
  }
  interface Session {
    tokenInfo: JWT;
    user: SessionUser;
  }

  interface User {
    id: string;
    roles: string[];
    tokenRes: TokenRes;
  }

  interface SessionUser {
    id: string;
    roles: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    refreshExpiresIn?: number;
  }
}
