import React , { useState }from 'react';
import styled from 'styled-components';
import { AppDispatch } from '../../store/index'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { asyncLoginFetch } from '../../store/user';
import { validateEmail, validatePassword } from '../../utils/validate';

type propsType = {
  dialogController: (dialogStatus: boolean) => void,
  setDialogText: React.Dispatch<React.SetStateAction<string>>
};

const LoginForm: React.FC<propsType> = ({dialogController, setDialogText}) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const login = async () => {
    if(!(account.email && account.password)) {
      setDialogText("이메일 비밀번호를 입력해주세요.");
      dialogController(true);
      return;
    }
    if(validateEmail(account.email)){
      return;
    }
    if(validatePassword(account.password)){
      return;
    }
    else {
      await dispatch(asyncLoginFetch({
        email: account.email, nick: '', password: account.password, id: NaN
      }))
      .unwrap()
      .then(() => { navigate('/'); })
      .catch((err) => {
        setDialogText(err.message);
        dialogController(true);
      });
    }
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
      <InputContainer>
        <InputText>이메일:</InputText>
        <Input name="email" onChange={onChangeAccount} type="text" />
      </InputContainer>
      <ValidateText>{validateEmail(account.email)}</ValidateText>
      <InputContainer>
        <InputText>패스워드:</InputText>
        <Input name="password" onChange={onChangeAccount} type="password" />
      </InputContainer>
      <ValidateText>{validatePassword(account.password)}</ValidateText>
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

const ValidateText = styled.div`
color: red;
font-size: x-small;
`;

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

const InputContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 2px;
`;

const Input = styled.input`
border: 2px solid black;
border-radius: 10px;
`;

const InputText = styled.div`
width: 100px;
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
background-color: skyblue;
font-weight: 700;
margin-left: 20px;
margin-right: 20px;
user-select: none;
cursor: pointer;
`;