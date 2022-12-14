
import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from './apis/cookie';
import MainPage from "./pages/MainPage";
const AuthRoute = () => {
  let isAuthorized = getCookie();
  return (
    !isAuthorized || isAuthorized === "undefined" ? <Navigate to="/login" /> : <MainPage/>
  );
}
export default AuthRoute;