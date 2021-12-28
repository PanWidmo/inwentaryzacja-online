import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';
import APUsers from 'components/organisms/APUsers/APUsers';
import APFixedAssets from 'components/organisms/APFixedAssets/APFixedAssets';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <APUsers />
        <APFixedAssets />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
