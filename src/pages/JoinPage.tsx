import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextDialog from '../components/dialogs/TextDialog';
import JoinForm from '../components/JoinForm';
import { Navigate } from "react-router-dom";
import { getCookie } from '../apis/cookie';

const JoinPageDiv = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const JoinPage: React.FC = () => {
  let isAuthorized = getCookie();
  const [dialog, setDialog] = useState(false)
  const navigate = useNavigate();
  const dialogController = (dialogStatus: boolean) => {
    if (dialogStatus) {
      return setDialog(dialogStatus)
    } else {
      navigate('/')
      return setDialog(dialogStatus)
    }
  };
  const joinText = `회원가입이 성공했습니다. 축하드려요!`
  return (
    !isAuthorized || isAuthorized === "undefined" ?
    <JoinPageDiv>
      <JoinForm dialogController={ dialogController }></JoinForm>
      {
        dialog && <TextDialog dialogController={ dialogController } text={joinText}></TextDialog>
      }
    </JoinPageDiv> : <Navigate to="/"/>
  );
}

export default JoinPage;