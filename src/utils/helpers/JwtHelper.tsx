import Cookies from "js-cookie";

export const ID_TOKEN_KEY = "id_token";
export const REFRESH_TOKEN_KEY = "refresh_token";

export const getToken = (): string | undefined => {
  return Cookies.get(ID_TOKEN_KEY);
};

export const saveToken = (token: string): void => {
  Cookies.set(ID_TOKEN_KEY, token, { expires: 365 });
};

export const destroyToken = (): void => {
  Cookies.remove(ID_TOKEN_KEY);
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get(REFRESH_TOKEN_KEY);
};

export const saveRefreshToken = (token: string): void => {
  Cookies.set(REFRESH_TOKEN_KEY, token, { expires: 365 });
};

export const destroyRefreshToken = (): void => {
  Cookies.remove(REFRESH_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken, getRefreshToken, saveRefreshToken, destroyRefreshToken };