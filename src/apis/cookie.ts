import { Cookies } from "react-cookie";
//import * as jwt from 'jsonwebtoken';

const cookies = new Cookies();

export const setCookie = (value: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);
  return cookies.set('access_token', value, { expires: new Date(expireDate) });
};

export const removeCookie = (name: string) => {
  cookies.remove(name);
};

export const getCookie = (name: string) => {
  return cookies.get(name)
};