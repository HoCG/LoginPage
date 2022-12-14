import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { getCookie } from '../apis/cookie';

const LoginPageDiv = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const LoginPage: React.FC = () => {
  let isAuthorized = getCookie();
  return (
    !isAuthorized || isAuthorized === "undefined" ?
    <LoginPageDiv>
      <LoginForm></LoginForm>
    </LoginPageDiv> : <Navigate to="/" />
  );
}

export default LoginPage;