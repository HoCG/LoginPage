import React, { useState } from 'react';
import styled from 'styled-components';
import { AppDispatch } from '../../store/index'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { asyncJoinFetch } from '../../store/user';

type propsType = {
  dialogController: (dialogStatus: boolean) => void,
};


const JoinForm: React.FC<propsType> = ({dialogController}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    nick: "",
    password: "",
  });
  const join = async () => {
    await dispatch(asyncJoinFetch({
      id: NaN, email: account.email, nick: account.nick, password: account.password
    }))
    .unwrap()
    .then(() => { 
      dialogController(true);
    })
    .catch((err) => console.log(err));;
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
      <h2>회원가입</h2>
      <InputContainer>
        <InputText>이메일:</InputText>
        <Input name="email" onChange={onChangeAccount}  type="text" />
      </InputContainer>
      <InputContainer>
        <InputText>닉네임:</InputText>
        <Input name="nick" onChange={onChangeAccount}  type="text" />
      </InputContainer>
      <InputContainer>
        <InputText>패스워드:</InputText>
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
width: 200px;
border: 2px solid black;
border-radius: 10px;
`;

const InputText = styled.div`
width: 100px;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 2px;
`;

const ButtonContainer = styled.div`
margin-top: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;

const JoinBtn = styled.div`
width: 130px;
height: 80px;
border-radius: 25px;
background-color: skyblue;
font-weight: 700;
margin-left: 20px;
margin-right: 20px;
cursor: pointer;
`;