import './Root.styles.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { Wrapper } from './Root.styles';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <Wrapper>
          <p> Projekt Inz- Start :) </p>
        </Wrapper>
      </GlobalStyle>
    </ThemeProvider>
  );
}

export default Root;
