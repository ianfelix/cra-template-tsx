import React from 'react';

import { AppContainer, Intro } from './styles';
import GlobalStyles from '../../styles/global';

const Welcome: React.FC = () => (
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

export default Welcome;
