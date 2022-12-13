import React, { useState } from 'react';
import styled from 'styled-components';
import TextDialog from '../components/dialogs/TextDialog';
import { useSelector } from 'react-redux';
import JoinForm from '../components/JoinForm';
import { RootState } from '../store';

const JoinPageDiv = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const JoinPage: React.FC = () => {
  const [dialog, setDialog] = useState(false)
  const user = useSelector((state: RootState) => {
    return state.userStore.user;
  })
  const joinText = `회원가입이 성공했습니다. 축하드려요! ${user.userNick}님`
  return (
    <JoinPageDiv>
      <JoinForm setDialog={ setDialog }></JoinForm>
      {
        dialog && <TextDialog setDialog={ setDialog } text={joinText}></TextDialog>
      }
    </JoinPageDiv>
  );
}

export default JoinPage;