import React , { useState }from 'react';
import { AppDispatch } from '../store/index'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
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
border: 2px solid black;
`;

const ButtonContainer = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`

const LoginBtn = styled.div`
width: 130px;
height: 80px;
border-radius: 25px;
background-color: purple;
font-weight: 800;
margin-left: 20px;
margin-right: 20px;
cursor: pointer;
`;

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const login = async () => {
    await dispatch(asyncLoginFetch({userEmail: account.email, userNick: '', password: account.password}));
    navigate("/");
  }
  const makeAccount = () => {
    navigate('/join');
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
        <div>이메일</div>
        <Input name="email" onChange={onChangeAccount}  type="text" />
      </div>
      <div>
        <div>패스워드</div>
        <Input name="password" onChange={onChangeAccount} type="password" />
      </div>
      <ButtonContainer>
        <LoginBtn onClick={login}>
          <h1>로그인</h1>
        </LoginBtn>
        <LoginBtn onClick={makeAccount}>
          <h1>회원가입</h1>
        </LoginBtn>
      </ButtonContainer>
    </LoginFormContainer>
  );
}

export default LoginForm;