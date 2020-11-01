import React from 'react';
import styled from 'styled-components';

const App = () => (
  <AppContainer>
    <Intro>Welcome to my CRA-Template!</Intro>
  </AppContainer>
);

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: #1d1f27;
`;

const Intro = styled.p`
  font-size: 2.5vw;
  color: #ffff;
`;
