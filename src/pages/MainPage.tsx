import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
background-color: skyblue;
display: flex;
justify-content: center;
align-items: center;
`;

const MainPage: React.FC = () => {
  return (
    <MainDiv>
      <h1>메인페이지</h1>
    </MainDiv>
  );
}

export default MainPage;