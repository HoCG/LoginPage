import axios from 'axios';
import { getCookie, updateCookie } from './cookie';


const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // 기본 서버 주소 입력
  timeout: JSON.parse(process.env.REACT_APP_AXIOS_TIMEOUT),
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    access_token: getCookie('access_token'),
  },
});
customAxios.interceptors.request.use((config) => {
  return config
}); 
customAxios.interceptors.response.use((config) => {
  updateCookie();
  return config
}); 
export { customAxios };