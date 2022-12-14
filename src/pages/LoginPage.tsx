import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/forms/LoginForm';
import { Navigate } from "react-router-dom";
import { getCookie } from '../apis/cookie';

const LoginPage: React.FC = () => {
  const isAuthorized = getCookie();
  return (
    !isAuthorized || isAuthorized === "undefined" ?
    <LoginPageDiv>
      <LoginForm></LoginForm>
    </LoginPageDiv> : <Navigate to="/" />
  );
}

export default LoginPage;

const LoginPageDiv = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`