import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const LoginPageDiv = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const LoginPage: React.FC = () => {
  return (
    <LoginPageDiv>
      <LoginForm></LoginForm>
    </LoginPageDiv>
  );
}

export default LoginPage;