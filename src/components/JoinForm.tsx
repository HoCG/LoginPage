import React, { useState } from 'react';
import styled from 'styled-components';
import { AppDispatch } from '../store/index'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { asyncJoinFetch } from '../store/user';

const JoinFormContainer = styled.div`
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

const InputContainer = styled.div`
display: flex;
justify-content: right;
flex-direction: row;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`
const JoinBtn = styled.div`
width: 130px;
height: 80px;
border-radius: 25px;
background-color: purple;
font-weight: 800;
margin-left: 20px;
margin-right: 20px;
cursor: pointer;
`;
type propsType = {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>,
};


const JoinForm: React.FC<propsType> = ({setDialog}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    nick: "",
    password: "",
  });
  const join = async () => {
    dispatch(asyncJoinFetch({userEmail: account.email, userNick: account.nick, password: account.password}));
    setDialog(true);
  }
  const backToLogin = () => {
    navigate('/');
  }
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <JoinFormContainer>
      <h2>로그인 화면</h2>
      <InputContainer>
        <div>이메일</div>
        <Input name="email" onChange={onChangeAccount}  type="text" />
      </InputContainer>
      <InputContainer>
        <div>닉네임</div>
        <Input name="nick" onChange={onChangeAccount}  type="text" />
      </InputContainer>
      <InputContainer>
        <div>패스워드</div>
        <Input name="password" onChange={onChangeAccount} type="password" />
      </InputContainer>
      <ButtonContainer>
        <JoinBtn onClick={join}>
          <h1>회원가입</h1>
        </JoinBtn>
        <JoinBtn onClick={backToLogin}>
          <h1>돌아가기</h1>
        </JoinBtn>
      </ButtonContainer>
    </JoinFormContainer>
  );
}

export default JoinForm;