import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <AppContainer>
    <Intro>
      Welcome to my cra-template-tsx!
      <span aria-label="emojis" role="img">
        😁😎
      </span>
    </Intro>
    <GlobalStyles />
  </AppContainer>
);

export default App;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #1d1f27;
`;

const Intro = styled.p`
  font-size: 2.5vw;
  color: #ffff;
`;
