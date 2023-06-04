export interface ResourceAccess {
  bibot: {
    roles: string[];
  };
}

export interface UserAuthInfo {
  userId: string;
  isLogin: boolean;
}
