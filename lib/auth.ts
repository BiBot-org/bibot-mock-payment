import { keycloakSignIn, reissueToken } from "@/service/auth/AuthService";
import { TokenRes } from "@/types/auth/types";
import type { NextAuthOptions, Session, SessionUser, User } from "next-auth";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const jwtCallback = async ({
  token,
  user,
}: {
  token: JWT;
  user: User;
}) => {
  if (token?.expiresIn) {
    if (Math.floor(Date.now() / 1000) < token.expiresIn!!) {
      return { ...token, ...user };
    } else if (
      token.refreshToken &&
      Math.floor(Date.now() / 1000) < token.refreshExpiresIn!!
    ) {
      const newTokenData: TokenRes = await reissueToken(token.refreshToken);
      token.accessToken = newTokenData.accessToken;
      token.refreshToken = newTokenData.refreshToken;
      token.expiresIn = newTokenData.expiresIn;
      token.refreshExpiresIn = newTokenData.refreshExpiresIn;
      return { ...token, ...newTokenData };
    }
  }

  token.accessToken = user.tokenRes.accessToken;
  token.refreshToken = user.tokenRes.refreshToken;
  token.expiresIn = user.tokenRes.expiresIn;
  token.refreshExpiresIn = user.tokenRes.refreshExpiresIn;
  const sessionUser: SessionUser = {
    id: user.id,
    roles: user.roles,
  };
  return { ...token, ...sessionUser };
};

export const session = ({
  session,
  token,
}: {
  session: Session;
  token: JWT;
}): Promise<Session> => {
  if (
    Math.floor(Date.now() / 1000) > token?.expiresIn! &&
    token?.refreshTokenExpires &&
    Math.floor(Date.now() / 1000) > token?.refreshExpiresIn!
  ) {
    return Promise.reject({
      error: new Error("토큰이 만료되었습니다. 재 로그인 해 주세요."),
    });
  }

  session.tokenInfo = token;
  return Promise.resolve(session);
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "keycloak",
      name: "keycloak",
      credentials: {
        username: {
          label: "Username",
          type: "email",
          placeholder: "유저 이메일",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return await keycloakSignIn(
          credentials?.username as string,
          credentials?.password as string
        )
          .then((res) => {
            return res;
          })
          .catch(() => Promise.reject());
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: jwtCallback,
    session: session,
  },
};
export default NextAuth(authOptions);
