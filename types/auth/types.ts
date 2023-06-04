import { ResourceAccess } from "../user/types";

export interface KeycloakTokenRes {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  not_before_policy: number;
  session_state: string;
  scope: string;
}

export interface KeycloakUserInfoRes {
  email: string;
  email_verified: boolean;
  resource_access: ResourceAccess;
  family_name: string;
  given_name: string;
  name: string;
  preferred_username: string;
  sub: string;
}

export interface TokenInfo {
  accessToken: string;
  refreshToken: string;
  tokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}

export interface TokenRes {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
}
