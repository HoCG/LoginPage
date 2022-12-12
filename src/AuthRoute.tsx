
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from './apis/cookie';
import MainPage from "./pages/MainPage";
const AuthRoute = () => {
  let isAuthorized = getCookie("isAuthorized");
  useEffect(() => { isAuthorized = getCookie("isAuthorized") });
  return (
    !isAuthorized ? <Navigate to="/login" /> : <MainPage/>
  );
}
export default AuthRoute;