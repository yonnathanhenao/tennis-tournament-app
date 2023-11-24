import { jwtDecode } from "jwt-decode";

export type IUserInfo = {
  email?: string;
  name?: string;
  isAdmin?: boolean;
};

type IAuthInfo = {
  isAuthenticated: boolean;
  user: IUserInfo;
};

export function useAuth({ token }): IAuthInfo {
  let isAuthenticated = false;
  let user = {};
  if (token) {
    isAuthenticated = true;
    const decoded: IUserInfo = jwtDecode(token);
    user = {
      email: decoded.email,
      name: decoded.name,
      isAdmin: decoded.isAdmin,
    };
  }

  return {
    isAuthenticated,
    user,
  };
}
