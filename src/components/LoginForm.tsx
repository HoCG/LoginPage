import React , { useState }from 'react';
import { AppDispatch } from '../store/index'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { asyncLoginFetch } from '../store/user';

const LoginFormContainer = styled.div`
width: 500px;
height: 350px;
border-radius: 25px;
border: 2px solid black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Input = styled.input`
width: 300px;
border: 2px solid black;
`;

const LoginBtn = styled.div`
width: 300px;
height: 80px;
border-radius: 25px;
background-color: purple;
font-weight: 800;
cursor: pointer;
`;

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });
  const login = async () => {
    dispatch(asyncLoginFetch({userId: account.id, password: account.password}));
  }
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <LoginFormContainer>
      <h2>로그인 화면</h2>
      <div>
        <div>아이디</div>
        <Input name="id" onChange={onChangeAccount}  type="text" />
      </div>
      <div>
        <div>패스워드</div>
        <Input name="password" onChange={onChangeAccount} type="password" />
      </div>
      <LoginBtn onClick={login}>
        <h1>로그인</h1>
      </LoginBtn>
    </LoginFormContainer>
  );
}

export default LoginForm;