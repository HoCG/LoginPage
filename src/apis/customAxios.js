import axios from 'axios';
import { getCookie } from './cookie';


export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // 기본 서버 주소 입력
  timeout: JSON.parse(process.env.REACT_APP_AXIOS_TIMEOUT),
  headers: {
    access_token: getCookie('access_token'),
  },
});