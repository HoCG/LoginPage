import React from 'react';
import styled from 'styled-components';
import JoinForm from '../components/JoinForm';

const JoinPageDiv = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const JoinPage: React.FC = () => {
  return (
    <JoinPageDiv>
      <JoinForm></JoinForm>
    </JoinPageDiv>
  );
}

export default JoinPage;