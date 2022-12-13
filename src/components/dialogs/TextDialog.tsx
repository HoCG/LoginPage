import React from 'react';
import styled from 'styled-components';

const Centering = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const DialogBackground = styled(Centering)`
background-color: rgba(0, 0, 0, 0.4);
width: 100vw;
height: 100vh;
top: 0;
left: 0;
`;

const DialogContainer = styled(Centering)`
position: relative;
background-color: white;
border-radius: 20px;
width: 500px;
height: 300px;
`;

const DefaultCloseBtn = styled.div`
position: absolute;
top: 99%;
left: 99%;
background-color: white;
border-radius: 100px;
width: 50px;
height: 50px;
`;

const DialogText = styled(Centering)`
font-weight: 800;
`;

type propsType = {
  text: string,
  setDialog: React.Dispatch<React.SetStateAction<boolean>>,
};

const TextDialog: React.FC<propsType> = ({ text, setDialog }) => {
  const closeDialog = () => {
    setDialog(false);
  }
  return (
    <DialogBackground>
      <DialogContainer>
        <DefaultCloseBtn onClick={closeDialog}></DefaultCloseBtn>
        <DialogText>
          {text}
        </DialogText>
      </DialogContainer>
    </DialogBackground>
  );
};

export default TextDialog;