import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const MainDiv = styled.div`
width: 100vw;
height: 100vh;
background-color: skyblue;
display: flex;
justify-content: center;
align-items: center;
`;

const MainPage: React.FC = () => {
  const user = useSelector((state: RootState) => {
    return state.userStore.user;
  });
  return (
    <MainDiv>
      <h1>메인페이지</h1>
      {user.nick}
    </MainDiv>
  );
}

export default MainPage;